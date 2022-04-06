import { Product } from 'src/app/models-interface/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  constructor(
    private http: HttpClient
  ) { }



  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
