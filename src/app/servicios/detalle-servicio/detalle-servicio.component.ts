import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { servicioDTO } from '../servicio';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private serviciosService: ServiciosService,
    private router: Router) { }

  modelo:servicioDTO;
  FechaPublicacion: Date = new Date(2022, 3, 3); 
  FechaActualizacion: Date = new Date(2022, 10, 10); 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.serviciosService.obtenerPorId(params.id)
      .subscribe({
        next: (servicio) => {
          this.modelo = servicio
        },
        error: () => {
            this.router.navigate(["/"])
        },
      });
    });
  }

}
