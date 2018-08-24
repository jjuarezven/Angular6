import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { MessageComponent } from './message/message.component';

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
     <hr>
     <div style="text-align:center">
     <h1>
         Welcome to {{ title }}!
     </h1>
     <template #messagecontainer>
     </template>
     <button (click)="createComponent('HOLA PATO');">Welcome</button>
     <button (click)="destroyComponent();">NOT Welcome</button>
 </div>
   </div>
 `,
  styles: []
})
export class AppComponent {
  name: string;
  title = 'app';
  componentRef: any;

  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
    this.name = 'Parent';
  }

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
  }

  destroyComponent() {
    this.componentRef.destroy();
  }
}
