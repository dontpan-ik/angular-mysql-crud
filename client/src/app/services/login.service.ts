import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/api';

  
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  @Output() change1: EventEmitter<String> = new EventEmitter();

  constructor(private http: HttpClient) { }

  login(seseion: Login){
    return this.http.post<any>(`${this.API_URI}/login`,seseion);
  }

  getProducts(){
    return this.http.get(`${this.API_URI}/products`);
  }

  loginSuccess(){
    //this.change.emit(!!localStorage.getItem('access_token'));
    if(localStorage.getItem('access_token')!=null)
    return true;
    else
    return false
  }

  tipoUsu(){
    this.change1.emit(localStorage.getItem('rol_id')?.toString());
    return localStorage.getItem('rol_id');
  }
}
