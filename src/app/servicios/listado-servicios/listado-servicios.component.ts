import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { servicioDTO } from '../servicio';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado-servicios.component.html',
  styleUrls: ['./listado-servicios.component.css']
})
export class ListadoServiciosComponent implements OnInit {

  constructor(private serviciosService: ServiciosService) { }

  servicios: servicioDTO[];
  columnasAMostrar = ['id', 'nombre', 'valor', 'estado', 'acciones'];
  cantidadTotalRegistros;
  paginaActual=1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.serviciosService.obtenerPaginado(pagina, cantidadElementosAMostrar)
    .subscribe({
      next: (respuesta: HttpResponse<servicioDTO[]>) => {
        this.servicios = respuesta.body;
        this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      },
      error: (error)=> {
        console.error(error.message);
      }
    });
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex +1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  anular(id: number, nombre: string){
    this.serviciosService.anular(id)
    .subscribe({
      next: () => { 
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
        Swal.fire("Anulacion completa", `El registro con ID ${id} - ${nombre} fue anulado`, 'success');
      },
      error: (error) => console.error(error)
    });
  }

  activar(id: number, nombre: string){
    this.serviciosService.activar(id)
    .subscribe({
      next: () => { 
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
        Swal.fire("Activacion completa", `El registro con ID ${id} - ${nombre} fue activado`, 'success');
      },
      error: (error) => console.error(error)
    });
  }

  borrar(id: number, nombre: string){
    this.serviciosService.borrar(id)
    .subscribe({
      next: () => { 
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
        Swal.fire("Eliminacion completa", `El registro con ID ${id} - ${nombre} fue eliminado`, 'success');
      },
      error: (error) => console.error(error)
    });
  }


}
