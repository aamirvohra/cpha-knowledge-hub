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
import { ManageAccountComponent } from './manage-account/manage-account.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      breadcrumb : 'Home',
    }
  },
  {
    path: 'alt-home',
    component: AltHomeComponent,
    data: {
      title: 'Home',
      breadcrumb : 'Home',
    }
  },
  {
    path: 'regulation',
    component: RegulationComponent,
    data: {
      title: 'Regulation ',
      breadcrumb : 'Regulation',
    }
  },
  {
    path: 'search',
    component: SearchResultsComponent,
    data: {
      title: 'Search',
      breadcrumb : 'Search',
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      breadcrumb : 'Login',
    }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      title: 'Contact Us',
      breadcrumb : 'Contact Us',
    }
  },
  {
    path: 'health-pharmacy-economics',
    component: HealthPharmacyEconomicsComponent,
    data: {
      title: 'Health Pharmacy Economics',
      breadcrumb : 'Health Pharmacy Economics',
    }
  },
  {
    path: 'health-policy-regulation',
    component: HealthPolicyRegulationComponent,
    data: {
      title: 'Health Policy Regulation',
      breadcrumb : 'Health Policy Regulation',
    }
  },
  {
    path: 'my-account',
    component: ManageAccountComponent,
    data: {
      title: 'Account Preferences',
      breadcrumb : 'Account Preferences',
    }
  },

];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
