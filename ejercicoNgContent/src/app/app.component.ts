import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  sencillo, sin usar select para reemplazar contenido en diferentes sitios
  template: `
   <div>
     <app-child-component>
       <p>Hello there is ng-content from {{name}} !</p>
     </app-child-component>
   </div>
 `, */
 // usando select para reemplazar contenido
 template: `
   <div>
     <app-child-component>
       <p content-header>{{name}} header !</p>
       <p class="content-footer">{{name}} footer !</p>
     </app-child-component>
   </div>
 `,
  styles: []
})
export class AppComponent {
  name: string;
  constructor() {
    this.name = 'Parent';
  }
}
