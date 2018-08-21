import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  /* sencillo, sin usar select para reemplazar contenido en diferentes sitios
  template: `
   <div>
     <ng-content></ng-content>
     <p>Hello {{name}} !</p>
   </div>
 `, */
 // usando select para reemplazar contenido
 template: `
   <div>
     <ng-content select="[content-header]"></ng-content>
     <p>Hello {{name}} !</p>
     <ng-content select=".content-footer"></ng-content>
   </div>
 `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  name: string;
  constructor() {
    this.name = 'Child';
  }

  ngOnInit() {
  }

}
