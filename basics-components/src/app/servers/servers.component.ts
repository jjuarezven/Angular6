import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <label for="txtUserName">User Name</label>
    <input type="text" name="txtUserName" class="form-control" [(ngModel)]="userName">
    <p>{{ userName }}</p>
    <button [disabled]="userName === ''" class="btn btn-primary" (click)="resetUserName();">Reset user name</button>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName = '';
  constructor() { }

  ngOnInit() {
  }

  resetUserName () {
    this.userName = '';
  }
}
