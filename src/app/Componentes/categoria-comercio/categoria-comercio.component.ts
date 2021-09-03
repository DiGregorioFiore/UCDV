import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIA_COMERCIO} from './categoriaComercio';

@Component({
  selector: 'app-categoria-comercio',
  templateUrl: './categoria-comercio.component.html',
  styleUrls: ['./categoria-comercio.component.css']
})

export class CategoriaComercioComponent implements OnInit {
  public nombreCategoria: any;
  CategoriaArray = CATEGORIA_COMERCIO;
  CategoriaArray2:any[] = [];

  constructor(public activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.nombreCategoria = this.activatedRoute.snapshot.paramMap.get('nombre');

    for(let i=0;i<this.CategoriaArray.length;i++){
      if( this.nombreCategoria == this.CategoriaArray[i].categoria){
        this.CategoriaArray2.push(this.CategoriaArray[i]);
      }
      else{}
      
    }
  }
}
