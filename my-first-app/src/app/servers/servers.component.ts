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

  constructor() { }

  ngOnInit() {
  }

}
