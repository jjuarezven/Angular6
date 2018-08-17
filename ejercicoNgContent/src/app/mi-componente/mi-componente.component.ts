import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: `
    <div class="container">
      <b>{{ title.nativeElement.innerHTML}}</b>
      <ng-content></ng-content>
    </div>
  `,
  styles: ['']
})

export class MiComponenteComponent {
  @ContentChild('h6') title;
  /* constructor() {
    this.title = 'ejercicoNgContent';
  } */
}
