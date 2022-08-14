import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { tipoServicioDTO, tipoServicioCreacionDTO } from '../tipo-servicio';
import { TipoServiciosService } from '../tipo-servicios.service';

@Component({
  selector: 'app-editar-tipo-servicio',
  templateUrl: './editar-tipo-servicio.component.html',
  styleUrls: ['./editar-tipo-servicio.component.css']
})
export class EditarTipoServicioComponent implements OnInit {

  constructor(private tipoService:TipoServiciosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  errores: string[] = [];
  modelo:tipoServicioDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.tipoService.obtenerPorId(params.id).subscribe({
        next: (value) => {
            this.modelo = value;
        },
        error: () => {
          this.router.navigate(["/tipo-servicios"]);
        },
      })
    });
  }

  guardarCambios(tipoServicioCreacionDTO: tipoServicioCreacionDTO){
    this.tipoService.editar(this.modelo.id, tipoServicioCreacionDTO)
    .subscribe({
      next: () => this.router.navigate(["/tipo-servicios"]),
      error: (errores) => this.errores = parsearErroresAPI(errores),
    })
  }
}
