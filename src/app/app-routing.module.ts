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
import { EsAdminGuard } from './es-admin.guard';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'sucursales', component: ListadoSucursalesComponent, canActivate: [EsAdminGuard]},
  {path:'sucursales/crear', component: CrearSucursalComponent, canActivate: [EsAdminGuard]},
  {path:'sucursales/editar/:id', component: EditarSucursalComponent, canActivate: [EsAdminGuard]},
  {path:'tipo-servicios', component: ListadoTipoServicioComponent, canActivate: [EsAdminGuard]},
  {path:'tipo-servicios/crear', component: CrearTipoServicioComponent, canActivate: [EsAdminGuard]},
  {path:'tipo-servicios/editar/:id', component: EditarTipoServicioComponent, canActivate: [EsAdminGuard]},
  {path:'servicios', component: ListadoServiciosComponent, canActivate: [EsAdminGuard]},
  {path:'servicios/crear', component: CrearServicioComponent, canActivate: [EsAdminGuard]},
  {path:'servicios/editar/:id', component: EditarServicioComponent, canActivate: [EsAdminGuard]},
  {path:'paquetes', component: ListadoPaquetesComponent, canActivate: [EsAdminGuard]},
  {path:'paquetes/crear', component: CrearPaqueteComponent, canActivate: [EsAdminGuard]},
  {path:'paquetes/editar/:id', component: EditarPaqueteComponent, canActivate: [EsAdminGuard]},
  {path:'usuarios', component: IndiceUsuariosComponent, canActivate: [EsAdminGuard]},
  {path:'login', component:LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
