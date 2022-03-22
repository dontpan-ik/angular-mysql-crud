import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../models/venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get(`${this.API_URI}/orders`);
  }

  getOrder(id: number){
    return this.http.get(`${this.API_URI}/orders/${id}`);
  }

  saveOrder(venta: Venta){
    return this.http.post(`${this.API_URI}/orders`,venta);
  }

  deleteOrder(id: number){
    return this.http.delete(`${this.API_URI}/orders/${id}`);
  }

  updateOrder(venta: Venta, id: number): Observable <any>{
    return this.http.put(`${this.API_URI}/orders/${id}`,venta);
  }
}
