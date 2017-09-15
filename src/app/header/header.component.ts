import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSearchBarVisibleOnHandheldDevice: boolean;

  protected logo: string = AppURLRepo.KNOWLEDGE_HUB_LOGO;
  public cancelCross: string = AppURLRepo.CLOSE;
  public searchIcon: string = AppURLRepo.SEARCH_ICON;

  constructor() {
    this.isSearchBarVisibleOnHandheldDevice = false;
  }

  ngOnInit() {}

  toggleSearch() {
    this.isSearchBarVisibleOnHandheldDevice = !this.isSearchBarVisibleOnHandheldDevice;
  }

}
