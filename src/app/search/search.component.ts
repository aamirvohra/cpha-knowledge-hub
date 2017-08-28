import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchIcon: string = AppURLRepo.SEARCH_ICON;

  constructor() { }

  ngOnInit() {
  }

}
