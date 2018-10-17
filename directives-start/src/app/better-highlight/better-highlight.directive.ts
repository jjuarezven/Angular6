import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue'); */
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
