import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { sucursalDTO } from '../sucursal';
import { SucursalesService } from '../sucursales.service';

@Component({
  selector: 'app-listado-sucursales',
  templateUrl: './listado-sucursales.component.html',
  styleUrls: ['./listado-sucursales.component.css']
})
export class ListadoSucursalesComponent implements OnInit {

  constructor(private sucursalesService: SucursalesService) { }

  sucursales: sucursalDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros;
  paginaActual=1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.sucursalesService.obtenerPaginado(pagina, cantidadElementosAMostrar)
    .subscribe({
      next: (respuesta: HttpResponse<sucursalDTO[]>) => {
        this.sucursales = respuesta.body;
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

  borrar(id: number){
    this.sucursalesService.borrar(id)
    .subscribe({
      next: () => this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar),
      error: (error) => console.error(error)
    });
  }

}
