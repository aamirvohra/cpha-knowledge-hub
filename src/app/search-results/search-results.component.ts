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

    const obj1: any = {};
    obj1.title = 'Medical Cannabis Q&A';
    obj1.publisher = 'Canadian Pharmacists Association';
    obj1.publishedYear = 'August 2017';

    const obj2: any = {};
    obj2.title = 'Cannabis Legalization: Focusing on Patient Needs';
    obj2.publisher = 'The Arthritis Society';
    obj2.publishedYear = 'May 2016';

    const obj3: any = {};
    obj3.title = 'Therapeutic Use Of Cannabis - Position Statement';
    obj3.publisher = 'Pharmaceutical Society Of Australia';
    obj3.publishedYear = 'April 2015';

    const obj4: any = {};
    obj4.title = 'Role of Pharmacists in the Care of Patients Using Cannabis';
    obj4.publisher = 'American Pharmacists Association';
    obj4.publishedYear = 'December 2015';

    const obj5: any = {};
    obj5.title = 'Marijuana for Medical Purposes';
    obj5.publisher = 'Canadian Center for Aubstance Abuse';
    obj5.publishedYear = 'July 2015';

    const obj6: any = {};
    obj6.title = 'As High As The Rockies- The Canadian Marijuana Oppurtunity';
    obj6.editor = 'Andre Uddin, Neal Gilmer';
    obj6.publisher = 'Mackie Research';
    obj6.publishedYear = 'April 2016';

    const obj7: any = {};
    obj7.title = 'Join Venture: A Blueprint for Federal and Provincial Marjuana Policy';
    obj7.editor = 'Anindya Sen';
    obj7.publisher = 'C.D. Howe Institute';
    obj7.publishedYear = 'April 2016';

    const obj8: any = {};
    obj8.title = 'PharmaFocus 2019 - Leveraging Knowledge for Future Success';
    obj8.editor = 'Gerry Jeffcott';
    obj8.publisher = 'IMS Brogan';
    obj8.publishedYear = 'November 2015';

    this.searchResultList.push(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8);

  }

  pageChanged(pageEvent) {
    console.log('page changed');
  }

}
