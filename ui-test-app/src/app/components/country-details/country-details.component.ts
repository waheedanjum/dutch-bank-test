import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegionService} from "../../services/region.service";
import {Observable} from "rxjs";
import {CountriesData} from "../../models/region";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})

export class CountryDetailsComponent implements OnInit {
  name: string | null = '';

  countries$: Observable<CountriesData[]> | undefined;

  constructor(private activatedRoute: ActivatedRoute, private regionService: RegionService) {
   let value = this.activatedRoute.snapshot.queryParamMap.get('myRegion');

   if(value) {
     this.name = JSON.parse(value);
   }
    if(this.name && this.name.toUpperCase() === 'ASIA') {
     this.countries$ = this.regionService.getAsianCountries();
    }
    if(this.name && this.name.toUpperCase() === 'EUROPE') {
      this.countries$ = this.regionService.getEuropeanCountries();
    }
  }

  ngOnInit(): void {
  }

}
