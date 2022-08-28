import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sucursalPaqueteDTO } from 'src/app/sucursales/sucursal';
import { paqueteCreacionDTO, paqueteDTO } from '../paquete';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { servicioPaqueteDTO } from 'src/app/servicios/servicio';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-formulario-paquete',
  templateUrl: './formulario-paquete.component.html',
  styleUrls: ['./formulario-paquete.component.css']
})
export class FormularioPaqueteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private serviciosService: ServiciosService) { }

  dropdownList = [];
  selectedItems=[];
  dropdownSettings:IDropdownSettings={};
  dropDownForm:FormGroup;

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: paqueteDTO;

  sucursalesSeleccionadas: sucursalPaqueteDTO[] = [];

  @Output()
  guardarCambios: EventEmitter<paqueteCreacionDTO> = new EventEmitter<paqueteCreacionDTO>();
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.maxLength(50) ] } ],
      estado: true,
      serviciosIds: '',
      sucursales: '',
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
      this.selectedItems = this.modelo.servicios.map(val => {
        return {item_id: val.id, item_text: val.nombre}
      });
      this.sucursalesSeleccionadas = this.modelo.sucursales;
    }

    this.dropDownForm = this.formBuilder.group({
        myItems: [this.selectedItems]
    });

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: true,
      selectAllText: "Select All Items From List",
      unSelectAllText: "UnSelect All Items From List",
      noDataAvailablePlaceholderText: "There is no item availabale to show",
      allowSearchFilter: true
    };

    this.serviciosService.obtenerCombo().subscribe({
      next: (value) => {
        this.dropdownList = value.map(val => {
          return {item_id: val.id, item_text: val.nombre}
        })
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  OnSubmit(){
    this.selectedItems = this.dropDownForm.get('myItems').value;
    const serviciosIds = this.selectedItems.map(val => val.item_id);
    this.form.get('serviciosIds').setValue(serviciosIds);

    const sucursales = this.sucursalesSeleccionadas.map(val => {
      return { id: val.id, valor: val.valor }
    });
    this.form.get('sucursales').setValue(sucursales);

    this.guardarCambios.emit(this.form.value);
  }

}
