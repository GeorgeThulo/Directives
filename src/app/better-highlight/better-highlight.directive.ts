import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private eleRef: ElementRef,private  renderer: Renderer2) { }
  ngOnInit() {
  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

 @HostListener('mouseenter') mouseover(evetData: Event) { 
  this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')

  }
  @HostListener('mouseleave') mouseleave(evetData: Event) { 
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
  
    }
  

}
