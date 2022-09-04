import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearServicioComponent } from './servicios/crear-servicio/crear-servicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { CrearPaqueteComponent } from './paquetes/crear-paquete/crear-paquete.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { SubmenuComponent } from './menu/submenu/submenu.component';
import { ListadoSucursalesComponent } from './sucursales/listado-sucursales/listado-sucursales.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { FormularioSucursalComponent } from './sucursales/formulario-sucursal/formulario-sucursal.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { CrearTipoServicioComponent } from './tipo-servicio/crear-tipo-servicio/crear-tipo-servicio.component';
import { ListadoTipoServicioComponent } from './tipo-servicio/listado-tipo-servicio/listado-tipo-servicio.component';
import { EditarTipoServicioComponent } from './tipo-servicio/editar-tipo-servicio/editar-tipo-servicio.component';
import { FormularioTipoServicioComponent } from './tipo-servicio/formulario-tipo-servicio/formulario-tipo-servicio.component';
import { ListadoServiciosComponent } from './servicios/listado-servicios/listado-servicios.component';
import { EditarServicioComponent } from './servicios/editar-servicio/editar-servicio.component';
import { FormularioServicioComponent } from './servicios/formulario-servicio/formulario-servicio.component';
import { ListadoPaquetesComponent } from './paquetes/listado-paquetes/listado-paquetes.component';
import { EditarPaqueteComponent } from './paquetes/editar-paquete/editar-paquete.component';
import { FormularioPaqueteComponent } from './paquetes/formulario-paquete/formulario-paquete.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { AddSucursalesComponent } from './sucursales/add-sucursales/add-sucursales.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearServicioComponent,
    LandingPageComponent,
    CrearSucursalComponent,
    MenuComponent,
    CrearPaqueteComponent,
    ListadoGenericoComponent,
    SubmenuComponent,
    ListadoSucursalesComponent,
    EditarSucursalComponent,
    FormularioSucursalComponent,
    MostrarErroresComponent,
    MapaComponent,
    CrearTipoServicioComponent,
    ListadoTipoServicioComponent,
    EditarTipoServicioComponent,
    FormularioTipoServicioComponent,
    ListadoServiciosComponent,
    EditarServicioComponent,
    FormularioServicioComponent,
    ListadoPaquetesComponent,
    EditarPaqueteComponent,
    FormularioPaqueteComponent,
    InputImgComponent,
    AddSucursalesComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule,
    SweetAlert2Module.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
