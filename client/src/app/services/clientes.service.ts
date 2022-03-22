import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from "../models/cliente";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(`${this.API_URI}/clients`);
  }

  getCliente(id: number){
    return this.http.get(`${this.API_URI}/clients/${id}`);
  }

  saveCliente(cliente: Cliente){
    return this.http.post(`${this.API_URI}/clients`,cliente);
  }

  deleteCliente(id: number){
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }

  updateCliente(cliente: Cliente, id: number): Observable <any>{
    return this.http.put(`${this.API_URI}/clients/${id}`,cliente);
  }
}
