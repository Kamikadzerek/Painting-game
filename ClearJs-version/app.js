const colors = ['#fafafa', '#c8c8c8', '#969696', '#646464', '#000000']
const matrixSize = 10;

function generateMatrix(){ //generate matrix of div
    for ( let i = 0; i < matrixSize; i++) {
        for ( let j = 0; j < matrixSize; j++) {
            var div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.background = colors[Math.floor(Math.random()*colors.length)];
            div.className = 'cell';
            div.addEventListener("click", function() {
                let index = colors.indexOf(rgbToHex(this.style.background));
                this.style.background = index == colors.length-1 ? colors[0] : colors[index+1]; 
            } )
            div.id = j.toString() + i.toString();
            document.getElementById("main").appendChild(div);
        }
      } 
}

function rgbToHex(rgb) { //convert rgb string to hex string
    rgb = rgb.slice(4, -1).split(', ');
    return '#' + parseInt(rgb[0]).toString(16) + parseInt(rgb[1]).toString(16) + parseInt(rgb[2]).toString(16);
}

function generateJsonArray() { // generate JSON array
    let cells = document.querySelectorAll('.cell');
    var jsonArray = [];
    for (let i = 0; i< cells.length; i++) {
        let  item = {
            "x": cells[i].id[0],
            "y": cells[i].id[1],
            "color": rgbToHex(cells[i].style.background)
        }
    
        jsonArray.push(item);
    }
    return jsonArray;
}


function sendToLocalStorage() { // send state of cells to localStorage
    localStorage.setItem('cells', JSON.stringify(generateJsonArray()));
}
function restoreFromLocalStorage() { // restore state of cells from localStorage
    let cells = JSON.parse(localStorage.getItem('cells'));
    for (let i = 0; i< cells.length; i++) {
        document.getElementById(cells[i].x + cells[i].y).style.background=cells[i].color;

    }
}

generateMatrix();
document.querySelector('#save').addEventListener('click', sendToLocalStorage)
document.querySelector('#restore').addEventListener('click', restoreFromLocalStorage)