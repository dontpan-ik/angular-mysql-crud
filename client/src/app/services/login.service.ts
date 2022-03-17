import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(seseion: Login){
    return this.http.post(`${this.API_URI}/login`,seseion)
  }
}
