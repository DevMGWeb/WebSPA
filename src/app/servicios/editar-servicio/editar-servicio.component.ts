import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { servicioCreacionDTO, servicioDTO } from '../servicio';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private serviciosService : ServiciosService,
    private router: Router) { }

  modelo: servicioDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.serviciosService.obtenerPorId(params.id)
      .subscribe({
        next: (servicio) => {
          this.modelo = servicio;
        },
        error: () => {
          this.router.navigate(["/servicios"]);
        },
      })
    });
  }

  guardarCambios(servicioCreacionDTO: servicioCreacionDTO){
    this.serviciosService.editar(this.modelo.id, servicioCreacionDTO)
    .subscribe({
      next: () => this.router.navigate(["/servicios"]),
      error: (errores) => this.errores = parsearErroresAPI(errores)
    })
  }

}
