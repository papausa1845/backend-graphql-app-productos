import { Component } from '@angular/core';
import { Product } from './models-interface/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  imgParent='https://i.pinimg.com/564x/84/02/0b/84020b8e3b76a04d6155ddd46d0b63e2.jpg';
 
imgLoaded(img:string){
  console.log('load Padre', img)
}

} 
