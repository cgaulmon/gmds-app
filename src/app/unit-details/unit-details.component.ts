import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../models/Country';
import { Unit } from '../models/Unit';
import { CountryService } from '../services/country.service';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnInit {

  constructor(private unitService:UnitService, private countryService: CountryService, private route:ActivatedRoute) { }
  @ViewChild('myModal', { static: false }) myModal: ElementRef | undefined;
  unit: Unit | undefined;
  imgPath: any | undefined;
  altText: any | undefined;
  elm: HTMLElement | undefined;
  countries: Country[] | undefined;
  max: number | undefined;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.findById(id);
  }

  ngAfterViewInit(): void {
    this.elm = this.myModal?.nativeElement as HTMLElement;
 }

  findById(id: number) {
    this.unitService.findById(id).subscribe(data => {
      this.unit = data;
      this.imgPath = `/assets/units/${data.iconLink}`;
      this.altText = data.name;
    });
  }

  open() {
    if(this.elm) {
    this.elm?.classList.add('show');
    this.elm.style.width = '100vw';
    if(!this.countries) {
    this.findAllCountries();
    }
    
    this.max = this.unit?.qty;
  }
  }

  close() {
    if(this.elm) {
    this.elm.classList.remove('show');
    setTimeout(() => {
      if(this.elm)
      this.elm.style.width = '0';
    }, 75);
  }
  }

  findAllCountries() {
    this.countryService.findAll().subscribe(data => this.countries = data);
  }
}
