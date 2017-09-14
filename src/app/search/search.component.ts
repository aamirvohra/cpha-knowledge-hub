import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchIcon: string = AppURLRepo.SEARCH_ICON;
  public cancelCross: string = AppURLRepo.CLOSE;

  public searchForm: FormGroup;
  public isSearchBarVisibleOnHandheldDevice: boolean;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['']
    });
    this.isSearchBarVisibleOnHandheldDevice = false;
  }

  ngOnInit() {
  }

  toggleSearch() {
    this.isSearchBarVisibleOnHandheldDevice = !this.isSearchBarVisibleOnHandheldDevice;
  }

}
