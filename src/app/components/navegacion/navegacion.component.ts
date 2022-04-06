import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {
  actibarNavegacion=false;

  constructor() { }

  ngOnInit(): void {
  }
toggleNavegacion()
{
   this.actibarNavegacion = !this.actibarNavegacion;
}
  
  }

