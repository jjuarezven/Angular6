import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `<h2>{{mensajeExterno}}</h2>
  
  `
})
export class MessageComponent implements OnInit {
  @Input() mensajeExterno: string;
  @Input() mensajeExterno2: string;
  constructor() { }

  ngOnInit() {
  }

}
