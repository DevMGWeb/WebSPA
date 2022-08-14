import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { servicioCreacionDTO } from '../servicio';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      alert(params.id);
    });
  }

  guardarCambios(servicioCreacionDTO: servicioCreacionDTO){
    console.log(servicioCreacionDTO);
  }

}
