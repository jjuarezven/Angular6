import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
    <p>
      EVEN - {{evenNumber}}
    </p>
  `,
  styles: ['p { color: blueviolet; }']
})
export class EvenComponent {
  @Input() evenNumber: number;

  constructor() { }

}
