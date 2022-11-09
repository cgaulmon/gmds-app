import { Component, OnInit } from '@angular/core';
import { Country } from '../models/Country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-manage-countries',
  templateUrl: './manage-countries.component.html',
  styleUrls: ['./manage-countries.component.scss']
})
export class ManageCountriesComponent implements OnInit {

  countries: Country[]  | undefined;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.findCountries();
  }

  findCountries() {
    this.countryService.findAll().subscribe(data => this.countries = data);
  }
}
