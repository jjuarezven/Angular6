import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
    <p>
      ODD - {{oddNumber}}
    </p>
  `,
  styles: ['p { color: red; }']
})
export class OddComponent {
  @Input() oddNumber: number;

  constructor() { }

}
