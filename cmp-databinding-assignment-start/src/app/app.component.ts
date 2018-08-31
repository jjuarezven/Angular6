import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onNumberGenerated(myNumber: number) {
    myNumber % 2 === 0 ? this.evenNumbers.push(myNumber) : this.oddNumbers.push(myNumber);
  }
}
