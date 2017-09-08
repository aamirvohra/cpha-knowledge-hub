/**
 * Created by avohra on 6/15/2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegulationComponent } from './regulation/regulation.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'regulation',
    component: RegulationComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
