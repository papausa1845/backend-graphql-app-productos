import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  
  
  @Input() img:string ='';
  imgDefault:string='./assets/images/budaRojo.jpg';
  @Output()loaded=new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }
  imgError():void{
    this.img=this.imgDefault;
    console.log('imagen por defecto')
  }
  imgLoaded(){
    console.log('loadedHijo');
    this.loaded.emit(this.img);
  }
}


