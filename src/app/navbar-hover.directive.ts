import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarHover]',
})
export class NavbarHoverDirective {

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {}

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.renderer.addClass(this.hostElement.nativeElement, 'display');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.renderer.removeClass(this.hostElement.nativeElement, 'display');
  }
}
