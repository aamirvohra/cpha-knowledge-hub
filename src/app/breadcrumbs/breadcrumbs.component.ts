import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: Array<string>;

  constructor(private router: Router) {
    this.router.events.filter(
        event => event instanceof NavigationEnd)
      .subscribe(
        (event: NavigationEnd) => {
          this.getBreadcrumbs(event.url);
        }
      );

    this.breadcrumbs = ['home'];
  }

  ngOnInit() {
  }

  private getBreadcrumbs(url: string) {
    if (url.indexOf('/') === 0) {
      url = url.substring(1);
    }

    this.breadcrumbs = this.breadcrumbs.concat(url.split('/'));
  }

}
