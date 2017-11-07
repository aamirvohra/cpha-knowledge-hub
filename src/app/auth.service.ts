import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  isUserAuthenticated: BehaviorSubject<boolean>;

  constructor() {
    this.isUserAuthenticated = new BehaviorSubject(false);
  }

  authenticate(userName: string, password: string) {
    localStorage.setItem('authenticated', 'true');
    this.isUserAuthenticated.next(true);
  }

  // isAuth(): boolean {
  //   const auth = localStorage.getItem('authenticated')
  //     ? localStorage.getItem('authenticated') === 'true'
  //       ? true : false : false;
  //
  //
  // }

}
