import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NosotrosComponent } from './Componentes/nosotros/nosotros.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { LocalesComponent } from './Componentes/locales/locales.component';
import { NovedadesComponent } from './Componentes/novedades/novedades.component';
//import { PromocionesComponent } from './Componentes/promociones/promociones.component';
import { CategoriaComercioComponent } from './Componentes/categoria-comercio/categoria-comercio.component';
import { DetalleComercioComponent } from './Componentes/detalle-comercio/detalle-comercio.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { FarmaciasComponent } from './Componentes/farmacias/farmacias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    LocalesComponent,
    NovedadesComponent,
    //PromocionesComponent,
    CategoriaComercioComponent,
    DetalleComercioComponent,
    ServiciosComponent,
    FarmaciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
export class MyModule {}
