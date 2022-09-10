import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { usuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.css']
})
export class IndiceUsuariosComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  usuarios: usuarioDTO[];
  columnasAMostrar = ['email', 'rol', 'acciones'];
  cantidadTotalRegistros;
  paginaActual=1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar: number) {
    this.seguridadService.obtenerUsuarios(pagina, cantidadElementosAMostrar)
    .subscribe({
      next: (respuesta: HttpResponse<usuarioDTO[]>) => {
        this.usuarios = respuesta.body;
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

  hacerAdmin(usuarioId: string){
    this.seguridadService.hacerAdmin(usuarioId)
    .subscribe({
      next: () => { 
        Swal.fire("Exitoso", "La operacion se ha realizado");
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
      },
      error: (error) => console.error(error)
    });
  }

  removerAdmin(usuarioId: string){
    this.seguridadService.removerAdmin(usuarioId)
    .subscribe({
      next: () => { 
        Swal.fire("Exitoso", "La operacion se ha realizado");
        this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
      },
      error: (error) => console.error(error)
    });
  }
}
