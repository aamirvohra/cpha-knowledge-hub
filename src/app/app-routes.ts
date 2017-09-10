/**
 * Created by avohra on 6/15/2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegulationComponent } from './regulation/regulation.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'regulation',
    component: RegulationComponent,
  },
  {
    path: 'search',
    component: SearchResultsComponent,
  },
  {
    path: 'login-register',
    component: LoginComponent,
  },

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
