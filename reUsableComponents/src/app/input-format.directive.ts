import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: string = "";

  constructor(private el: ElementRef) {
  }

  @HostListener('focus') onFocus() {
    console.log("Focus PockUs");
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = this.format === 'lowercase' ? value.toLowerCase() : value.toUpperCase();
  }
}
