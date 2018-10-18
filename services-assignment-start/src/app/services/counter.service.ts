import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  constructor() { }

  onActiveToInactive() {
    this.activeToInactive++;
    console.log('Active to Inactive: ', this.activeToInactive);
  }

  onInactiveToActive() {
    this.inactiveToActive++;
    console.log('Inactive to Active: ', this.inactiveToActive);
  }
}
