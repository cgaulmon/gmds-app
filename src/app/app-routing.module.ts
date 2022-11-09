import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDeploymentDetailsComponent } from './country-deployment-details/country-deployment-details.component';
import { CountryDeploymentsComponent } from './country-deployments/country-deployments.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
import { ManageCountriesComponent } from './manage-countries/manage-countries.component';
import { ManageUnitsComponent } from './manage-units/manage-units.component';
import { ReservesListComponent } from './reserves-list/reserves-list.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';

const routes: Routes = [
  {
    path : "countries",
    component: CountryListComponent
  },
  {
    path : "units",
    component: ReservesListComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "unit-details/:id",
    component: UnitDetailsComponent
  },
  {
    path: "manage-countries",
    component: ManageCountriesComponent
  },
  {
    path: "manage-units",
    component: ManageUnitsComponent
  },
  {
    path: "country-deployments",
    component: CountryDeploymentsComponent
  },
  {
    path: "country-deployment-details/:id",
    component: CountryDeploymentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
