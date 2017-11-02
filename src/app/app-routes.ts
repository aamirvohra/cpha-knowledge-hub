/**
 * Created by avohra on 6/15/2017.
 */

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegulationComponent } from './regulation/regulation.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HealthPharmacyEconomicsComponent } from './health-pharmacy-economics/health-pharmacy-economics.component';
import { HealthPolicyRegulationComponent } from './health-policy-regulation/health-policy-regulation.component';
import { AltHomeComponent } from './alt-home/alt-home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'alt-home',
    component: AltHomeComponent,
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
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'health-pharmacy-economics',
    component: HealthPharmacyEconomicsComponent,
  },
  {
    path: 'health-policy-regulation',
    component: HealthPolicyRegulationComponent,
  },

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
