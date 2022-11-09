import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { CountryDeploymentDetail } from '../models/CountryDeploymentDetail';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-deployment-details',
  templateUrl: './country-deployment-details.component.html',
  styleUrls: ['./country-deployment-details.component.scss']
})
export class CountryDeploymentDetailsComponent implements OnInit {

  constructor(private countryService: CountryService, private route: ActivatedRoute) { }
  details: CountryDeploymentDetail[] | undefined;
  country: Country | undefined;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if(id) {
      this.findCountry(id);
      this.findAll(id);
    }
  }

  findCountry(countryId: number) {
    this.countryService.findById(countryId).subscribe(data => this.country = data);

  }
  findAll(countryId: number) {
    this.countryService.findDeploymentDetailsByCountryId(countryId).subscribe(data => this.details = data);
  }

}
