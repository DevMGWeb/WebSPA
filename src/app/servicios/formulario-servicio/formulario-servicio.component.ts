import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoServicioDTO } from 'src/app/tipo-servicio/tipo-servicio';
import { servicioCreacionDTO, servicioDTO } from '../servicio';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.css']
})
export class FormularioServicioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form:FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  TipoServiciosCombo: tipoServicioDTO[];

  @Input()
  modelo: servicioDTO;

  @Output()
  guardarCambios: EventEmitter<servicioCreacionDTO> = new EventEmitter<servicioCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.maxLength(50)]}],
      valor: '',
      descripcion: '',
      estado: false,
      tipoServicioId: [0, {validators: [Validators.required]}]
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

}
