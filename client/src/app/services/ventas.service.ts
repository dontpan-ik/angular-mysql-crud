import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get(`${this.API_URI}/orders`);
  }
}
