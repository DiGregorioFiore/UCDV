import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DETALLE_COMERCIO} from './detalleComercio';


@Component({
  selector: 'app-detalle-comercio',
  templateUrl: './detalle-comercio.component.html',
  styleUrls: ['./detalle-comercio.component.css']
})

export class DetalleComercioComponent implements OnInit {
  public nombreCategoria : any;
  public nombreLocal: any;
  DetalleArray = DETALLE_COMERCIO;
  detalleLocal:any;

  constructor(
    public activatedRoute:ActivatedRoute,
    public _sanitizer: DomSanitizer
    ) { 
  }

  getVideoIframe(url:any) {
  
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);     
  }

  ngOnInit(): void {
    
    this.nombreCategoria = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.nombreLocal = this.activatedRoute.snapshot.paramMap.get('nombreLocal');

    for(let i=0;i<this.DetalleArray.length;i++){
      if( this.nombreLocal == this.DetalleArray[i].nombre){
        this.detalleLocal = this.DetalleArray[i]
      }
      else{}
    }
  }

}
