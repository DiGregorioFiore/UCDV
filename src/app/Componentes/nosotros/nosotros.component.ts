import { Component, OnInit } from '@angular/core';
import { NOSOTROS } from './nosotros';
//import { Nosotros} from './nosotrosInterfaz';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})

export class NosotrosComponent implements OnInit {
  Nosotros = NOSOTROS;
  NosotrosDirectivos:any[] = [];
  NosotrosVocales:any[] = [];
  NosotrosVocalesSuplentes:any[] = [];
  NosotrosCuentas:any[] = [];

  constructor() { 
  }

  ngOnInit(): void {

    for(let i=0;i<this.Nosotros.length;i++){
      switch(this.Nosotros[i].categoria){
        case 'Directivo':
          this.NosotrosDirectivos.push(this.Nosotros[i]);
          break;
        case 'Vocal':
            this.NosotrosVocales.push(this.Nosotros[i]);
          break;
        case 'VocalSuplente':
            this.NosotrosVocalesSuplentes.push(this.Nosotros[i]);
          break;
        case 'Cuentas':
            this.NosotrosCuentas.push(this.Nosotros[i]);
          break;
      }
    }
  }
}
