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

  public toggleMenu(event) {
    this.isMenuOpen = !this.isMenuOpen;
    event.stopPropagation();
  }

  public toggleSubMenu(el: HTMLElement) {
    if (!el.classList || !el.classList.contains('display')) {
      el.classList.add('display');
    } else {
      el.classList.remove('display');
    }
  }

  @HostListener('document:click', ['$event'])
  public onClick(event) {
    if (event.target && event.target.classList && !event.target.classList.contains('arrow')) {
      this.isMenuOpen = this.isMenuOpen ? !this.isMenuOpen : this.isMenuOpen;
    }

  }


}
