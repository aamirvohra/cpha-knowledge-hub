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

    // for (let i = 0; i < 10; i++) {
    //   const obj: any = {};
    //   obj.title = '...Sed ex lacus, rhoncus vitae vehicula vel, dictum eget quam. Cras eu ullamcorper ante, pellentesque congue mauris. Integer eu erat consequat, tristique ante nec, vulputate ligula. Duis urna massa, elementum non pharetra non, varius eget sapien.';
    //   obj.subTitle = 'Nulla mattis felis a eleifend egestas. Maecenas ullamcorper feugiat egestas. Nam et neque enim. Quisque nec ultrices mi. Vestibulum ut euismod leo. Fusce vitae urna erat. Suspendisse eget urna ipsum. Maecenas vitae turpis eros.';
    //   obj.editor = 'Jane Doe';
    //   obj.publisher = 'Neilson Canada';
    //   obj.publishedYear = '2017';
    //
    //   this.searchResultList.push(obj);
    // }

    const obj: any = {};
    obj.title = 'Medical Cannabis Q&A';
    obj.publisher = 'Canadian Pharmacists Association';
    obj.publishedYear = 'August 2017';

    const obj1: any = {};
    obj1.title = 'Cannabis Legalization: Focusing on Patient Needs';
    obj1.publisher = 'The Arthritis Society';
    obj1.publishedYear = 'May 2016';

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

    this.searchResultList.push(obj1, obj3, obj4, obj5, obj6, obj7, obj8);

  }

  pageChanged(pageEvent) {
    console.log('page changed');
  }

}
