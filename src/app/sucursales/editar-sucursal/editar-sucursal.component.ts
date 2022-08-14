import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/Utilidades';
import { sucursalCreacionDTO, sucursalDTO } from '../sucursal';
import { SucursalesService } from '../sucursales.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  constructor(private sucursalService: SucursalesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  errores: string[] = [];
  modelo: sucursalDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sucursalService.obtenerPorId(params.id).subscribe({
        next: (sucursal)=> { 
          this.modelo = sucursal;
        },
        error: () => {
          this.router.navigate(["/sucursales"]);
        }
      })
    })
  }

  guardarCambios(sucursalCreacionDTO: sucursalCreacionDTO){
    this.sucursalService.editar(this.modelo.id, sucursalCreacionDTO)
    .subscribe({
      next: () => this.router.navigate(["/sucursales"]),
      error: (error) => this.errores = parsearErroresAPI(error)
    })
  }
}
