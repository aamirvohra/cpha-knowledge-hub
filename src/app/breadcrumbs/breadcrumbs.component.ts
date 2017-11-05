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
          this.breadcrumbs.push(...this.getBreadcrumbs(this.router.routerState, router.routerState.root));
        }
      );

    this.breadcrumbs = ['home'];
  }

  ngOnInit() {
  }

  private getBreadcrumbs(state: any, parent: any) {
    let data: Array<string> = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.breadcrumb) {
      data.push(parent.snapshot.data.breadcrumb);
    }

    if(state && parent) {
      data.push(... this.getBreadcrumbs(state, state.firstChild(parent)));
    }

    return data;
  }

}
