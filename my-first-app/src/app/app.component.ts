import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
    h3 { color: red; }
  `]
})
export class AppComponent {
  name = 'JOSE';
}
