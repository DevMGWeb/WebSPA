import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { ListadoSucursalesComponent } from './sucursales/listado-sucursales/listado-sucursales.component';
import { CrearTipoServicioComponent } from './tipo-servicio/crear-tipo-servicio/crear-tipo-servicio.component';
import { EditarTipoServicioComponent } from './tipo-servicio/editar-tipo-servicio/editar-tipo-servicio.component';
import { ListadoTipoServicioComponent } from './tipo-servicio/listado-tipo-servicio/listado-tipo-servicio.component';
import { CrearServicioComponent } from './servicios/crear-servicio/crear-servicio.component';
import { EditarServicioComponent } from './servicios/editar-servicio/editar-servicio.component';
import { ListadoServiciosComponent } from './servicios/listado-servicios/listado-servicios.component';
import { CrearPaqueteComponent } from './paquetes/crear-paquete/crear-paquete.component';
import { EditarPaqueteComponent } from './paquetes/editar-paquete/editar-paquete.component';
import { ListadoPaquetesComponent } from './paquetes/listado-paquetes/listado-paquetes.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'sucursales', component: ListadoSucursalesComponent},
  {path:'sucursales/crear', component: CrearSucursalComponent},
  {path:'sucursales/editar/:id', component: EditarSucursalComponent},
  {path:'tipo-servicios', component: ListadoTipoServicioComponent},
  {path:'tipo-servicios/crear', component: CrearTipoServicioComponent},
  {path:'tipo-servicios/editar/:id', component: EditarTipoServicioComponent},
  {path:'servicios', component: ListadoServiciosComponent},
  {path:'servicios/crear', component: CrearServicioComponent},
  {path:'servicios/editar/:id', component: EditarServicioComponent},
  {path:'paquetes', component: ListadoPaquetesComponent},
  {path:'paquetes/crear', component: CrearPaqueteComponent},
  {path:'paquetes/editar/:id', component: EditarPaqueteComponent},
  {path:'**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
