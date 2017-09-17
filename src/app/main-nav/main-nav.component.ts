import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  public menuIcon = AppURLRepo.MENU_ICON;
  public close = AppURLRepo.CLOSE;
  public downIcon = AppURLRepo.DOWN;

  @ViewChild('practiceDevelopment')
  public practiceDevelopment: ElementRef;

  @ViewChild('practiceAdvancement')
  public practiceAdvancement: ElementRef;

  public isMenuOpen: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public toggleSubMenu(el: HTMLElement) {
    if (!el.classList || !el.classList.contains('display')) {
      el.classList.add('display');
    } else {
      el.classList.remove('display');
    }
  }

  // @HostListener('document:click', ['$event'])
  // public onClick(event) {
  //   console.log(event.target.parentNode.parentNode);
  //   console.log(event.currentTarget);
  //   // if (event.target.classList.contains('nav-links')) {
  //     this.practiceDevelopment.nativeElement.classList.remove('display');
  //     this.practiceAdvancement.nativeElement.classList.remove('display');
  //   // }
  // }


}
