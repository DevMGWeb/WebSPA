import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { tipoServicioCreacionDTO } from '../tipo-servicio';
import { TipoServiciosService } from '../tipo-servicios.service';

@Component({
  selector: 'app-crear-tipo-servicio',
  templateUrl: './crear-tipo-servicio.component.html',
  styleUrls: ['./crear-tipo-servicio.component.css']
})
export class CrearTipoServicioComponent implements OnInit {

  errores: string[] = [];

  constructor(private tipoServicioService: TipoServiciosService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(tipoServicio: tipoServicioCreacionDTO){
    this.tipoServicioService.crear(tipoServicio).subscribe({
      next: (tipoServicio)=>{ 
        this.router.navigate(["/tipo-servicios"]);
      },
      error: (error) => {
        this.errores = parsearErroresAPI(error)
      }
    });
  }
}
