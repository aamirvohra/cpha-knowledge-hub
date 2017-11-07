import { Component, OnInit, Input } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('isAuthenticated')
  public isAuthenticated: boolean;

  public isSearchBarVisibleOnHandheldDevice: boolean;

  protected logo: string = AppURLRepo.KNOWLEDGE_HUB_LOGO;
  public cancelCross: string = AppURLRepo.CLOSE;
  public searchIcon: string = AppURLRepo.SEARCH_ICON;
  public settingsIcon: string = AppURLRepo.SETTINGS;
  public signoutIcon: string = AppURLRepo.LOG_OUT;
  public dropdownIcon: string = AppURLRepo.DOWN;

  constructor() {
    this.isSearchBarVisibleOnHandheldDevice = true;
  }

  ngOnInit() {

  }

  toggleSearch() {
    this.isSearchBarVisibleOnHandheldDevice = !this.isSearchBarVisibleOnHandheldDevice;
  }

}
