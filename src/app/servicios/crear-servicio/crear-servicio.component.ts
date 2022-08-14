import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tipoServicioDTO } from 'src/app/tipo-servicio/tipo-servicio';
import { TipoServiciosService } from 'src/app/tipo-servicio/tipo-servicios.service';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { servicioCreacionDTO, servicioDTO } from '../servicio';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {

  constructor(private serviciosService: ServiciosService,
    private tipoServicioService: TipoServiciosService,
    private router: Router) { }

  errores: string[] = [];

  tipoServicios: tipoServicioDTO[];

  ngOnInit(): void {
    this.tipoServicioService.obtenerCombo()
    .subscribe(values => {
      this.tipoServicios = values;
    })
  }

  guardarCambios(servicio: servicioCreacionDTO){
    this.serviciosService.crear(servicio)
    .subscribe({
      next: () => this.router.navigate(["/servicios"]),
      error: (err) => {
          this.errores = parsearErroresAPI(err);
      },
    })
  }

}
