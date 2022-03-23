import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getOrders(id:number){
    return this.http.get(`${this.API_URI}/order_details/${id}`);
  }
}
