import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/users`);
  }

  getUser(id: number){
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  saveUser(user: Users){
    return this.http.post(`${this.API_URI}/users`,user);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  updateUser(user: Users, id: number): Observable <any>{
    return this.http.put(`${this.API_URI}/users/${id}`,user);
  }
}
