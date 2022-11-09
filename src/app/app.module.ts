import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservesListComponent } from './reserves-list/reserves-list.component';
import { LoginComponent } from './login/login.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { ManageCountriesComponent } from './manage-countries/manage-countries.component';
import { ManageUnitsComponent } from './manage-units/manage-units.component';
import { FormsModule } from '@angular/forms';
import { CountryDeploymentsComponent } from './country-deployments/country-deployments.component';
import { CountryDeploymentDetailsComponent } from './country-deployment-details/country-deployment-details.component';
import { IconLinkComponent } from './icon-link/icon-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    ReservesListComponent,
    LoginComponent,
    UnitDetailsComponent,
    ManageCountriesComponent,
    ManageUnitsComponent,
    CountryDeploymentsComponent,
    CountryDeploymentDetailsComponent,
    IconLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
