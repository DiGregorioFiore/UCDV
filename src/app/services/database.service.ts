import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public DB: AngularFireDatabase) { }
  
  public prueba1(){
    var key = this.DB.list('/locales/').push('hola').key;
  }

  public getFarmacias(){
    return this.DB.list('Farmacias/').valueChanges();
  }
  
}
  