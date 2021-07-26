import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryDetailsComponent} from "./components/country-details/country-details.component";

const routes: Routes = [
  { path: 'country-details', component : CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
