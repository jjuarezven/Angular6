import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // otra manera, sin usar el Renderer
  @HostBinding('style.backgroundColor') backgrounColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue'); */
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgrounColor = 'lightBlue';
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue'); */
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgrounColor = 'transparent';
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent'); */
  }
}
