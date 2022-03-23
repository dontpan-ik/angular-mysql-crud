import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from "../models/cliente";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getLast(){
    return this.http.get(`${this.API_URI}/util/last`);
  }

  getDataSet(){
    return this.http.get(`${this.API_URI}/util/dataset`);
  }
}
