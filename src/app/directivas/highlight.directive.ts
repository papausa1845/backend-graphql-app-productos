import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //evento mouse que cambia el color de fondo de 
  //<p appHighlight> {{product.description}}</p> de product.html
  @HostListener('mouseenter') onMouseEnter(){
    this.elementref.nativeElement.style.backgroundColor = 'aqua';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementref.nativeElement.style.backgroundColor = '';
  }

  constructor(
    private elementref: ElementRef
  ) { 
    // this.element.nativeElement.style.backgroundColor = 'red';
  }

}
