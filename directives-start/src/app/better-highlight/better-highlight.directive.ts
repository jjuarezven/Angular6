import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlighttColor = 'lightBlue';
  // otra manera, sin usar el Renderer
  @HostBinding('style.backgroundColor') backgrounColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgrounColor = this.defaultColor;
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue'); */
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgrounColor = this.highlighttColor;
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightBlue'); */
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgrounColor = this.defaultColor;
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent'); */
  }
}
