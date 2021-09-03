import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Componentes/home/home.component';
import { NosotrosComponent} from './Componentes/nosotros/nosotros.component';
import { ContactoComponent} from './Componentes/contacto/contacto.component';
import { LocalesComponent} from './Componentes/locales/locales.component';
import { NovedadesComponent} from './Componentes/novedades/novedades.component';
import { CategoriaComercioComponent } from './Componentes/categoria-comercio/categoria-comercio.component';
import { DetalleComercioComponent } from './Componentes/detalle-comercio/detalle-comercio.component';
import { ServiciosComponent} from './Componentes/servicios/servicios.component';
import { FarmaciasComponent } from './Componentes/farmacias/farmacias.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'locales', component: LocalesComponent},
  {path: 'novedades', component: NovedadesComponent},
  {path: 'locales/:nombre', component: CategoriaComercioComponent},
  {path: 'locales/:nombre/:nombreLocal', component: DetalleComercioComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'servicios/:farmacias', component: FarmaciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
