import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }
}
