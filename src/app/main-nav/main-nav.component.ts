import { Component } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  public menuIcon = AppURLRepo.MENU_ICON;
  public close = AppURLRepo.CLOSE;

  public isMenuOpen: boolean;

  constructor() {
    this.isMenuOpen = false;
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
