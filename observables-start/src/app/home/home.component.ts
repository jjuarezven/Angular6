import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';



const beers = [
  { name: 'Stella', country: 'Belgium', price: 9.5 },
  { name: 'Sam Adams', country: 'USA', price: 8.5 },
  { name: 'Bud Light', country: 'USA', price: 6.5 },
  { name: 'Brooklyn Lager', country: 'USA', price: 8.0 },
  { name: 'Sapporo', country: 'Japan', price: 7.5 }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  obs1: Subscription;
  obs2: Subscription;
  obs3: Subscription;
  constructor() {}

  ngOnInit() {
    const myNumbers = interval(1000);
    this.obs1 = myNumbers.subscribe((number: Number) => console.log(number));

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('fail');
        //observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
    this.obs2 = myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed')
    );

    /* otro ejemplo:
    You can create an observable with the method create() passing an argument that will represent an observer.
    When observable gets created, it doesn’t know yet which concrete object will be provided. It’ll be known later,
    at the time of the subscription.
    This particular observable thinks, “When someone will subscribe to my beers, they will provide me a concrete beer consumer,
    and I’ll just push one beer object to this guy”.
    https://yakovfain.com/2017/09/01/rxjs-essentials-part-3-using-observable-create/
    */
    function getObservableBeer() {
      return Observable.create(observer => {
        beers.forEach(beer => observer.next(beer));
        observer.complete();
      });
    }

    const myObserver = getObservableBeer();
    this.obs3 = myObserver.subscribe(
      beer => console.log('Subscriber got ' + beer.name),
      error => console.log(error),
      () => console.log('The stream is over')
    );
  }

  // cancelar las suscripciones para evitar que se sigan ejecutando
  ngOnDestroy() {
    this.obs1.unsubscribe();
    this.obs2.unsubscribe();
    this.obs3.unsubscribe();
  }
}
