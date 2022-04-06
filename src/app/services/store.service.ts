
import { Injectable } from '@angular/core';
import { Product } from '../models-interface/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
  private myCarroDeCompras: Product[] = [];
  
  constructor() { }



//esta logica va a product-list.ts
sumarAlCarrito(product:Product){
  this.myCarroDeCompras.push(product);}

  getCarroDeCompras(){
    return this.myCarroDeCompras;
  }

getTotal(){
return this.myCarroDeCompras.reduce((sum,item)=> sum + item.price, 0);}


}
