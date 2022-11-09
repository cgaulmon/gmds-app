import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from '../models/Unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  ROOT_URL = '/api/units';
  constructor(private http:HttpClient) { }

  findAllReserveUnits() {
    return this.http.get<Unit[]>(`${this.ROOT_URL}/reserves`);
  }

  findById(id: number) {
    return this.http.get<Unit>(`${this.ROOT_URL}/${id}`);
  }

  findAll() {
    return this.http.get<Unit[]>(this.ROOT_URL);
  }
}
