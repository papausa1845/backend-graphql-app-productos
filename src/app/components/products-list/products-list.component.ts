import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models-interface/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  myCarroDeCompras: Product[] = [];
  total:number=0;
  products:Product[]=[]
  today = new Date();
  date = new Date(2022, 1, 21);
  //   { id:'1',
  //   name:'Lampara',
  //   precio:100,
  //   image:'./assets/images/lampUno.jpg',
  //  },
  //  { id:'2',
  //  name:'Lampara',
  //  precio:100,
  //  image:'./assets/images/lampDos.jpg',
  //  },
  //  { id:'3',
  //  name:'Lampara',
  //  precio:100,
  //  image:'./assets/images/anillo.jpg',
  //  },
  //  { id:'4',
  //  name:'Lamapara',
  //  precio:100,
  //  image:'./assets/images/lampCuatro.jpg',
  //  },
  //  { id:'5',
  //  name:'Lampara',
  //  precio:100,
  //  image:'./assets/images/mesa.jpg',
  //  },
  //  ] 
  

  constructor(
    private storeService: StoreService,
    private productService: ApiService,
  ) { 
    this.myCarroDeCompras = this.storeService.getCarroDeCompras()
  }//esto viene de store.service.ts

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe(data=>{
    this.products= data;
    })
  }
  //los this.de esta funcion vienen de store.service.ts
sumarAlCarro(product:Product){
  this.storeService.sumarAlCarrito(product)
  
  this.total= this.storeService.getTotal();
}


}
