import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="alert alert-warning warningComponent" role="alert">
      Warning!! - Cuidado!!
    </div>
  `,
  styles: [`
  .warningComponent {
    color: red;
  }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
