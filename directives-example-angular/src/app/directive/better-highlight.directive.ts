import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector : '[appBetterHighLight]',
})
export class BetterHighLightDirective implements OnInit {

    @Input() hightlightColor: string;
    @Input() defaultColor: string;
    @HostBinding('style.color') color: string = 'black';
    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
        //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red');
    }

    @HostListener('mouseenter') onMouseEnter(mouseEvent: Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red');
      this.color = this.hightlightColor;
    }

    @HostListener('mouseleave') onMouseLeave(mouseEvent: Event) {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
      this.color = this.defaultColor;
    }
}
