import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { paqueteCreacionDTO } from '../paquete';
import { PaqueteService } from '../paquete.service';

@Component({
  selector: 'app-crear-paquete',
  templateUrl: './crear-paquete.component.html',
  styleUrls: ['./crear-paquete.component.css']
})
export class CrearPaqueteComponent implements OnInit {

  constructor(private paqueteService: PaqueteService,
    private router: Router) { }

  errores: string[] = [];

  ngOnInit(): void {
  }

  guardarCambios(paqueteCreacionDTO: paqueteCreacionDTO){
    this.paqueteService.crear(paqueteCreacionDTO)
    .subscribe({
      next: ()=> {
          this.router.navigate(["/paquetes"]);
      },
      error: (errores) =>{
        this.errores = parsearErroresAPI(errores);
      }
    });
  }
}
