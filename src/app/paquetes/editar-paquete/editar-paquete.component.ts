import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { paqueteCreacionDTO, paqueteDTO } from '../paquete';
import { PaqueteService } from '../paquete.service';

@Component({
  selector: 'app-editar-paquete',
  templateUrl: './editar-paquete.component.html',
  styleUrls: ['./editar-paquete.component.css']
})
export class EditarPaqueteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private paqueteService: PaqueteService,
    private router: Router) { }

  modelo: paqueteDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paqueteService.obtenerPorId(params.id)
      .subscribe({
        next: (paquete) => {
          this.modelo = paquete;
        },
        error: (err) => {
          console.error(err);
          this.router.navigate(['/paquetes']);
        }
      })
    });
  }

  guardarCambios(paqueteCreacionDTO: paqueteCreacionDTO){
    this.paqueteService.editar(this.modelo.id, paqueteCreacionDTO)
    .subscribe({
      next: () => {
        this.router.navigate(["/paquetes"]);
      },
      error: (err) => {
          this.errores = parsearErroresAPI(err);
      },
    })
  }

}
