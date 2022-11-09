import { Component, OnInit } from '@angular/core';
import { ReserveUnitsViewModel } from '../models/ReserveUnitsViewModel';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-reserves-list',
  templateUrl: './reserves-list.component.html',
  styleUrls: ['./reserves-list.component.scss']
})
export class ReservesListComponent implements OnInit {

  model:ReserveUnitsViewModel | undefined
  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.findAllReserves();
  }


  findAllReserves() {
    this.model = new ReserveUnitsViewModel();
    this.unitService.findAllReserveUnits().subscribe(data => {
        data.forEach(unit => {
          if(unit.unitType === 'E') {
            this.model?.troops?.push(unit);
          } else {
            this.model?.equipment?.push(unit);
          }  
        });
    })
  }

}
