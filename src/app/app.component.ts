import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isUserAuthenticated: boolean;

  constructor(private router: Router,
              private titleService: Title,
              private authService: AuthService) {
    this.isUserAuthenticated = false;

    this.router.events
      .filter(
        e => e instanceof NavigationEnd)
      .subscribe(event => {
        let title = this.getTitle(
          router.routerState, router.routerState.root).join('-') + ' - CPHA Knowledge Hub';

        this.titleService.setTitle(title);
      });

    this.authService.isUserAuthenticated.subscribe(
      authenticated => {
        if(authenticated) {
          this.router.navigate(['home']);
          this.isUserAuthenticated = true;
        }
      }
    )
  }

  public ngOnInit() {
  }

  public getTitle(state, parent) {
    let data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}
