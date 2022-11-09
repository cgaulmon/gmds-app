import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/Country';
import { CountryDeployment } from '../models/CountryDeployment';
import { CountryDeploymentDetail } from '../models/CountryDeploymentDetail';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  ROOT_URL = "/api/countries"
  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Country[]>(this.ROOT_URL);
  }

  findById(countryId: number) {
    return this.http.get<Country>(`${this.ROOT_URL}/${countryId}`);
  }

  findAllCountryDeployments() {
    return this.http.get<CountryDeployment[]>(`${this.ROOT_URL}/deployments`);
  }

  findDeploymentDetailsByCountryId(countryId: number) {
    return this.http.get<CountryDeploymentDetail[]>(`${this.ROOT_URL}/deployments/${countryId}`);
  }
}
