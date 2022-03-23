import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProveedores(){
    return this.http.get(`${this.API_URI}/supliers`);
  }

  getProveedor(id: number){
    return this.http.get(`${this.API_URI}/supliers/${id}`);
  }

  saveProveedor(proveedor: Proveedor){
    return this.http.post(`${this.API_URI}/supliers`,proveedor);
  }

  deleteProveedor(id: number){
    return this.http.delete(`${this.API_URI}/supliers/${id}`);
  }

  updateProveedor(proveedor: Proveedor, id: number): Observable <any>{
    return this.http.put(`${this.API_URI}/supliers/${id}`,proveedor);
  }
}
