import { Component, OnInit } from '@angular/core';
import { CountryDeployment } from '../models/CountryDeployment';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-deployments',
  templateUrl: './country-deployments.component.html',
  styleUrls: ['./country-deployments.component.scss']
})
export class CountryDeploymentsComponent implements OnInit {

  deployments: CountryDeployment[] | undefined;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.findAllDeployments();
  }

  findAllDeployments() {
    this.countryService.findAllCountryDeployments().subscribe(data => this.deployments = data);
  }

}
