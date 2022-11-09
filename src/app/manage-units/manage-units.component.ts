import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Unit } from '../models/Unit';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-manage-units',
  templateUrl: './manage-units.component.html',
  styleUrls: ['./manage-units.component.scss']
})
export class ManageUnitsComponent implements OnInit {

  constructor(private unitService: UnitService) { }
  @ViewChild('myModal', { static: false }) myModal: ElementRef | undefined;
  units: Unit[] | undefined;
  elm: HTMLElement | undefined;
  selectedUnit: Unit | undefined;
  
  ngAfterViewInit(): void {
   this.elm = this.myModal?.nativeElement as HTMLElement;
}
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.unitService.findAll().subscribe(data => this.units = data);
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

  open(unit: Unit) {
    this.selectedUnit = unit;
    if(this.elm) {
    this.elm?.classList.add('show');
    this.elm.style.width = '100vw';
    }
  }
}
