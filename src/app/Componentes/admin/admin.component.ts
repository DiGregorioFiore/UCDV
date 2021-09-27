import { Component, OnInit } from '@angular/core';
  import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  farmacias :any = [];

  constructor(public db: DatabaseService) {  }
  ngOnInit(): void {

    this.db.prueba1();

    let farmaciasAux: any;

    this.db.getFarmacias().subscribe(farmLambda=>{
      this.farmacias = farmLambda;
    //  this.farmacias = farmaciasAux;
    })
  }
}