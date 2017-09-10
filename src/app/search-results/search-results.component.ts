import { Component, OnInit } from '@angular/core';
import { AppURLRepo } from '../../utils/app-url-repo';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public print: string  =  AppURLRepo.PRINT;
  public share: string  = AppURLRepo.SHARE;

  public searchResultList: Array<any>;

  constructor() {
    this.getResultList();
  }

  ngOnInit() {
  }

  public getResultList() {
    this.searchResultList = [];

    for (let i = 0; i < 10; i++) {
      const obj: any = {};
      obj.title = '...Sed ex lacus, rhoncus vitae vehicula vel, dictum eget quam. Cras eu ullamcorper ante, pellentesque congue mauris. Integer eu erat consequat, tristique ante nec, vulputate ligula. Duis urna massa, elementum non pharetra non, varius eget sapien.';
      obj.subTitle = 'Nulla mattis felis a eleifend egestas. Maecenas ullamcorper feugiat egestas. Nam et neque enim. Quisque nec ultrices mi. Vestibulum ut euismod leo. Fusce vitae urna erat. Suspendisse eget urna ipsum. Maecenas vitae turpis eros.';
      obj.editor = 'Jane Doe';
      obj.publisher = 'Neilson Canada';
      obj.publishedYear = '2017';

      this.searchResultList.push(obj);
    }
  }

  pageChanged(pageEvent) {
    console.log('page changed');
  }

}
