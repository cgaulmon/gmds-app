import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeploymentService {
 ROOT_URL = "/api/deploy";
  constructor(private http:HttpClient) { }

  deploy (deployment: any) {
    return this.http.post<any>(this.ROOT_URL,deployment);
  }
}
