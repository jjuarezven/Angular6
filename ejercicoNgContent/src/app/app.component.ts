import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  Renderer2
} from '@angular/core';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user-component/user.component';
import { User } from './domain/user';


declare var $: any;
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
          <ng-template #messagecontainer></ng-template>
          <ng-template #messagecontainer2></ng-template>

          <div class="btn-toolbar">
            <button class="btn btn-primary" (click)="createComponent('HOLA');">Welcome</button>
            <button class="btn btn-danger" (click)="destroyComponent();">NOT Welcome</button>
          </div>
          <div id='newStudyModal' class='modal fade' role='dialog'>
              <div class='modal-dialog modal-lg'>
                  <div id='newStudyModalContent' class='modal-content panel panel-primary' #d1>
                  </div>
              </div>
          </div>
          <div *ngIf="showUser">
            <h1>{{usuario | json}}</h1>
          </div>
      </div>
    </div>
 `,
  styles: []
})
export class AppComponent {
  name: string;
  title = 'app';
  componentRef: any;
  componentRef2: any;
  usuario: User;
  showUser: boolean;

  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('messagecontainer2', { read: ViewContainerRef }) entry2: ViewContainerRef;
  @ViewChild('d1') d1: ElementRef;

  constructor(private resolver: ComponentFactoryResolver, private renderer: Renderer2) {
    this.name = 'Parent';
  }

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.mensajeExterno = message;

    this.entry2.clear();
    const factory2 = this.resolver.resolveComponentFactory(UserComponent);
    this.componentRef2 = this.entry2.createComponent(factory2);
    this.componentRef2.instance.mensajeExterno2 = 'CONTENIDO MODAL';

    this.componentRef2.instance.eventoUsuario.subscribe((usuario) => {
      this.showUser = true;
      this.usuario = usuario;
  });

    this.renderer.appendChild(this.d1.nativeElement, this.componentRef2.location.nativeElement);
    $('#newStudyModal').modal('show');
  }

  destroyComponent() {
    this.componentRef.destroy();
  }

  onServerAdded(serverData: string) {
    console.log(serverData);
  }
}
