import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';
import { tipoServicioDTO } from 'src/app/tipo-servicio/tipo-servicio';
import { TipoServiciosService } from 'src/app/tipo-servicio/tipo-servicios.service';
import { servicioCreacionDTO, servicioDTO } from '../servicio';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.css']
})
export class FormularioServicioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private tipoServicioService: TipoServiciosService) { }

  form:FormGroup;

  TipoServiciosCombo: tipoServicioDTO[];
  imagenCambiada = false;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: servicioDTO;

  @Output()
  guardarCambios: EventEmitter<servicioCreacionDTO> = new EventEmitter<servicioCreacionDTO>();

  ngOnInit(): void {
    this.tipoServicioService.obtenerCombo()
    .subscribe(values => {
      this.TipoServiciosCombo = values;
    })

    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.maxLength(50)]}],
      valor: '',
      descripcion: '',
      estado: false,
      tipoServicioId: [0, {validators: [Validators.required]}],
      foto: '',
    })

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

  archivoSeleccionado(archivo:File){
    this.form.get('foto').setValue(archivo);
    this.imagenCambiada = true;
  }
}
