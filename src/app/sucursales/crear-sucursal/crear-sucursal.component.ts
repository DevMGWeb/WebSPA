import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { sucursalCreacionDTO } from '../sucursal';
import { SucursalesService } from '../sucursales.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {

  errores: string[] = [];

  constructor(private sucursalService: SucursalesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(sucursal: sucursalCreacionDTO){
    this.sucursalService.crear(sucursal).subscribe({
      next: (sucursal)=>{ 
        this.router.navigate(["/sucursales"]);
      },
      error: (error) => {
        this.errores = parsearErroresAPI(error)
      }
    });
  }
}
