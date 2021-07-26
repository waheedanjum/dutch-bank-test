import { Component, OnInit } from '@angular/core';

import { CountriesData } from "./models/region";
import { RegionService } from "./services/region.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Region Selection App';
  constructor(
    private regionService: RegionService,
  ) {}

  ngOnInit(): void {
  }
}
