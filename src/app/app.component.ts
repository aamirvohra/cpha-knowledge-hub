import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  public ngOnInit() {
    // this.router.events.filter(
    //   event => event instanceof NavigationEnd)
    //   .subscribe(
    //     (event: NavigationEnd) => {
    //       console.log(event);
    //     }
    //   );
  }

}
