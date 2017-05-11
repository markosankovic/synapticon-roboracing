import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
  }

}
