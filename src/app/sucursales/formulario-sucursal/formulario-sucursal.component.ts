import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada, CoordenadaConMensaje } from 'src/app/utilidades/mapa/coordenada';
import { sucursalCreacionDTO, sucursalDTO } from '../sucursal';

@Component({
  selector: 'app-formulario-sucursal',
  templateUrl: './formulario-sucursal.component.html',
  styleUrls: ['./formulario-sucursal.component.css']
})
export class FormularioSucursalComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form: FormGroup;

  @Input()
  errores:string[] = [];

  @Input()
  modelo: sucursalDTO;

  @Output()
  guardarCambios: EventEmitter<sucursalCreacionDTO> = new EventEmitter<sucursalCreacionDTO>();

  coordenadaInicial: CoordenadaConMensaje[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required, Validators.maxLength(75)]}],
      latitud: ['', {validators: [Validators.required]}],
      longitud: ['', {validators: [Validators.required]}],
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud,longitud: this.modelo.longitud, mensaje: ''});
    }
  }
  
  coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

}
