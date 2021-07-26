import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";

interface Region {
  id: number;
  name: string
}

const regions: Region[] = [
  { id: 1, name: 'Asia'},
  { id: 2, name: 'Europe'}
];

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})

export class RegionsComponent implements OnInit {

  readonly regionsData: Region[]  = regions;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegionSelect(event: any) {
    let region = this.regionsData.find(x => x.id === Number(event.target.value));

    if(region) {
      const queryParams: any = {};
      queryParams.myRegion = JSON.stringify(region.name);

      const navigationExtras: NavigationExtras = {
        queryParams
      };

      this.router.navigate(['/country-details'], navigationExtras);
    }
  }

}
