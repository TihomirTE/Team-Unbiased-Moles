import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[appMyHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) {

    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
        this.highlightBackground('#E3E3E3');
      }
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
        this.highlightBackground(null);
      }
      private highlightBackground(input: string) {
        this.el.nativeElement.style.backgroundColor = input;
      }

      private highlight(input: string) {
        this.el.nativeElement.style.color = input;
      }
}
