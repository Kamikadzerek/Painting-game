const colors = ['#fafafa', '#c8c8c8', '#969696', '#646464', '#000000']
var matrixSize = 10;

function generateMatrix(){
    for ( let i = 0; i < matrixSize; i++) {
        for ( let j = 0; j < matrixSize; j++) {
            var div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.background = colors[Math.floor(Math.random()*colors.length)];
            div.className = 'cell';
            div.addEventListener("click", function() {
                index = colors.indexOf(rgbToHex(this.style.background));
                this.style.background = index == colors.length-1 ? colors[0] : colors[index+1]; 
                
            } )
            div.id = i.toString() + j.toString();
            document.getElementById("main").appendChild(div);
        }
      } 
}

function rgbToHex(rgb) {
    rgb = rgb.slice(4, -1).split(', ');
    return '#' + parseInt(rgb[0]).toString(16) + parseInt(rgb[1]).toString(16) + parseInt(rgb[2]).toString(16);
}




generateMatrix()