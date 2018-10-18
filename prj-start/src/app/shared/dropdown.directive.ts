import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openClass = false;

  constructor(private eRef: ElementRef) { }
  // el click sobre cualquier otra parte de la pagina cierra el dropdown si esta desplegado
  @HostListener('document:click', ['$event']) clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.openClass = !this.openClass;
    } else {
      this.openClass = false;
    }
  }
}
