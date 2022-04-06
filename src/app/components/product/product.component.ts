import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models-interface/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
//este input viene de product-list
@Input('product') product!:Product;
@Output()sumarAlCarro= new EventEmitter <Product>()

  constructor() { }

  ngOnInit(): void {
  }
agregarAlCarro(){
  this.sumarAlCarro.emit(this.product);
}
}
