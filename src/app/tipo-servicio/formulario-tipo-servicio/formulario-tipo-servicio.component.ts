import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoServicioCreacionDTO, tipoServicioDTO } from '../tipo-servicio';

@Component({
  selector: 'app-formulario-tipo-servicio',
  templateUrl: './formulario-tipo-servicio.component.html',
  styleUrls: ['./formulario-tipo-servicio.component.css']
})
export class FormularioTipoServicioComponent implements OnInit {

  @Input()
  errores:string[] = [];
  
  @Input()
  modelo: tipoServicioDTO;

  imagenCambiada = false;

  @Output()
  guardarCambios: EventEmitter<tipoServicioCreacionDTO> = new EventEmitter<tipoServicioCreacionDTO>();

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.maxLength(50), Validators.minLength(3)]}],
      descripcion: '',
      poster: '',
      estado: false,
      mostrarEnElMenuPrincipal: false,
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }

  OnSubmit(){
    if(!this.imagenCambiada){
      this.form.patchValue({'poster': null});
    }

    this.guardarCambios.emit(this.form.value);
  }
}
