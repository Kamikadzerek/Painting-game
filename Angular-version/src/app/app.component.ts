import { Component } from '@angular/core';
import { Cell } from './cell';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Painting game';
  colors = ['#fafafa', '#c8c8c8', '#969696', '#646464', '#000000'];
  cells: Cell[];
  matrixSize = 10;

  constructor() {
    this.cells = this.generateMatrix();
  }

  generateMatrix(){ // generate matrix of div
    const cells = [];
    for ( let i = 0; i < this.matrixSize; i++) {
        for ( let j = 0; j < this.matrixSize; j++) {
            const cell: Cell = {
              x: i.toString(),
              y: j.toString(),
              color: this.randomColor()
            };
            cells.push(cell);
        }
      }
    return cells;
  }

  rgbToHex(rgb) { // convert rgb string to hex string
    rgb = rgb.slice(4, -1).split(', ');
    return '#' + parseInt(rgb[0], 10).toString(16) + parseInt(rgb[1], 10).toString(16) + parseInt(rgb[2], 10).toString(16);
  }

  randomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  changeColor(cell) { // change cell's color
    const index = this.colors.indexOf(this.rgbToHex(cell.target.style.background));
    const newColor = index === this.colors.length - 1 ? this.colors[0] : this.colors[index + 1];
    const id = cell.target.id;
    cell.target.style.background = newColor;
    if (id[0] == 0) {
      this.cells[id[1]].color = newColor;
    } else {
      this.cells[id].color = newColor;
    }
  }

  sendToLocalStorage() { // send state of cells to localStorage
    localStorage.setItem('cells', JSON.stringify(this.cells));
  }

  restoreFromLocalStorage() { // restore state of cells from localStorage
    const cells = JSON.parse(localStorage.getItem('cells'));

    this.cells = cells;
  }

}


