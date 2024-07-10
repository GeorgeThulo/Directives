import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
 
 @Input() defaultColor: string = 'transparent'; 
 @Input('appBetterHighlight') highlightColor: string = 'blue';

 @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; 
  constructor(private eleRef: ElementRef,private  renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

 @HostListener('mouseenter') mouseover(evetData: Event) { 
  //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue' )
 this.backgroundColor = 'red'
  }
  @HostListener('mouseleave') mouseleave(evetData: Event) { 
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
 this.backgroundColor = this.defaultColor; 
  
    }
  

}
