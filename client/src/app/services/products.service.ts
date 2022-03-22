import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(`${this.API_URI}/products`);
  }

  getProduct(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  saveProduct(product: Product){
    return this.http.post(`${this.API_URI}/products`,product);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  updateProduct(product: Product, id: number): Observable <Product>{
    return this.http.put(`${this.API_URI}/products/${id}`,product);
  }
}
