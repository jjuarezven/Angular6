import { Component, OnInit } from '@angular/core';

@Component({
  // componente como elemento
  selector: 'app-servers',
  // componente como atributo selector: '[app-servers]',
  // componente como clase selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName ;
  }

  onUpdateServerName(event: Event) {
    // this.serverName = (<HTMLInputElement>event.target).value;
    // otra forma de escribirlo
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
/*
can you specify different types of events like <HTMLInputElement>?

Thankfully, MDN already did that: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

if you click on one, you see the type in the "DOM Interface" field.

*/
