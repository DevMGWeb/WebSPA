import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { tipoServicioDTO } from '../tipo-servicio';
import { TipoServiciosService } from '../tipo-servicios.service';

@Component({
  selector: 'app-listado-tipo-servicio',
  templateUrl: './listado-tipo-servicio.component.html',
  styleUrls: ['./listado-tipo-servicio.component.css']
})
export class ListadoTipoServicioComponent implements OnInit {

  constructor(private tipoServicioServicio: TipoServiciosService) { }

  tipoServicios: tipoServicioDTO[];
  columnasAMostrar = ['id', 'nombre', 'estado', 'acciones'];
  cantidadTotalRegistros;
  paginaActual=1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.tipoServicioServicio.obtenerPaginado(pagina, cantidadElementosAMostrar)
    .subscribe({
      next: (respuesta: HttpResponse<tipoServicioDTO[]>) => {
        this.tipoServicios = respuesta.body;
        console.log(respuesta.headers.get("cantidadTotalRegistros"));
        this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      },
      error: (error) => { 
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
    this.tipoServicioServicio.anular(id)
    .subscribe({
      next: () => { 
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
        Swal.fire("Anulacion completa", `El registro con ID ${id} - ${nombre} fue anulado`, 'success');
      },
      error: (error) => console.error(error)
    });
  }

  activar(id: number, nombre: string){
    this.tipoServicioServicio.activar(id)
    .subscribe({
      next: () => { 
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
        Swal.fire("Activacion completa", `El registro con ID ${id} - ${nombre} fue activado`, 'success');
      },
      error: (error) => console.error(error)
    });
  }

  borrar(id: number, nombre: string){
    this.tipoServicioServicio.borrar(id)
    .subscribe({
      next: () => { 
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
        Swal.fire("Eliminacion completa", `El registro con ID ${id} - ${nombre} fue eliminado`, 'success');
      },
      error: (error) => console.error(error)
    });
  }
}
