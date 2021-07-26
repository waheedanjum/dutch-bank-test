import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { CountriesData } from "../models/region";

@Injectable({
  providedIn: 'root'
})

export class RegionService {

  constructor(private http: HttpClient) {}

  getEuropeanCountries(): Observable<CountriesData[]> {
    return this.http.get<CountriesData[]>('https://restcountries.eu/rest/v2/region/europe')
      .pipe(catchError(this.handleError<CountriesData[]>("getEuropeanCountries", [])));
  }

  getAsianCountries(): Observable<CountriesData[]> {
    return this.http.get<CountriesData[]>('https://restcountries.eu/rest/v2/region/asia')
      .pipe(catchError(this.handleError<CountriesData[]>("getAsianCountries", [])));
  }

  // ErrorHandler
  private handleError<T>(operation = "operation", result?: T | []) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
