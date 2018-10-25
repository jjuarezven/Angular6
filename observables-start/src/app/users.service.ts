import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // este objeto servirá al mismo tiempo como observable y observer
  userActivated = new Subject();
  constructor() {}
}
