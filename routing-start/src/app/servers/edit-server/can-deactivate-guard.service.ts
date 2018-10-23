import { Observable } from 'rxjs/Observable';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
/*
This original version has to be more complex in order to be generic: The advantage is that you can use this canDeactivateGuard version
not only on one particular component but on all components which implement the CanComponentDeactivate interface.

The CanComponentDeactivate interface is not absolutely required (you could apply the component type directly),
but in this way the guard is more generic.

The reason why we did this workaround is because angular will call the canDeactivate() of CanDeactivate interface in @angular/router,
there we have called the canDeactivate() of our own interface, which will execute the code that has been written in
the edit server component because that is the component from where angular trigger the canDeactivate()
*/
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
