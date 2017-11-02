import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { HomeComponent } from './home/home.component';
import { RegulationComponent } from './regulation/regulation.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, PaginationModule } from 'ngx-bootstrap';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarHoverDirective } from './navbar-hover.directive';
import { HealthPharmacyEconomicsComponent } from './health-pharmacy-economics/health-pharmacy-economics.component';
import { HealthPolicyRegulationComponent } from './health-policy-regulation/health-policy-regulation.component';
import { AltHomeComponent } from './alt-home/alt-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    MainNavComponent,
    FooterComponent,
    HomeComponent,
    RegulationComponent,
    BreadcrumbsComponent,
    FeaturedContentComponent,
    SearchResultsComponent,
    LoginComponent,
    ContactUsComponent,
    NavbarHoverDirective,
    HealthPharmacyEconomicsComponent,
    HealthPolicyRegulationComponent,
    AltHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTES,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
