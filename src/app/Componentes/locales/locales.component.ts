import { Component, OnInit } from '@angular/core';
import { Comercio} from './comercioInterfaz';
import { COMERCIOS} from './comercios'


@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {
  Comercios = COMERCIOS;
  

  constructor() { }

  ngOnInit(): void {

  }

}
