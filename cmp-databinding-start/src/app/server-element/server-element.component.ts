import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // este cambio evita la encapsulacion del estilo sólo para este componente, es decir, los estilos definidos acá se aplicarán globalmente 
  /* for global styling affects, it's best to use the src/styles.css file provided by default.
  Choosing a ViewEncapsulation.NONE in some component could lead to hard-to-figure-out stylings.*/
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // elementoCompartido esta llegando desde el componente padre
  @Input('elementoALIAS') elementoCompartido: {
    type: string, name: string, content: string
  };
  constructor() { }

  ngOnInit() {
  }

}
