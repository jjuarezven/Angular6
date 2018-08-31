import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-game-control',
  template: `
    <button (click)="startGame();">Start</button>
    <button (click)="stopGame();">Stop</button>
  `,
  styles: []
})
export class GameControlComponent {
  @Output() numberGenerated = new EventEmitter<number>();
  myNumber = 0;
  intervalId;
  constructor() { }

  startGame() {
    this.intervalId = setInterval(() => {
      this.numberGenerated.emit(++this.myNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalId);
  }
}
