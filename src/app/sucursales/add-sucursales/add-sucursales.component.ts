import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTable } from '@angular/material/table';
import Swal from 'sweetalert2';
import { sucursalDTO, sucursalPaqueteDTO } from '../sucursal';
import { SucursalesService } from '../sucursales.service';

@Component({
  selector: 'app-add-sucursales',
  templateUrl: './add-sucursales.component.html',
  styleUrls: ['./add-sucursales.component.css']
})
export class AddSucursalesComponent implements OnInit {

  constructor(private sucursalesService: SucursalesService) { }

  controlselection :FormControl = new FormControl();

  sucursalCombo: sucursalDTO[];

  @Input()
  sucursalesSeleccionadas: sucursalPaqueteDTO[] = [];

  columnasAMostrar = ['nombre', 'valor', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.sucursalesService.obtenerCombo()
    .subscribe(values => {
      this.sucursalCombo = values;
    })
  }

  optionSelected(opt: MatSelectChange){
    let optionText = (opt.source.selected as MatOption).viewValue;
    var valueFinded = this.sucursalesSeleccionadas.find(x => x.nombre == optionText);
    
    if(valueFinded === undefined){
      this.sucursalesSeleccionadas.push({ id: opt.value, nombre: optionText, valor: 0 });
    }else{
      Swal.fire("Seleccion Repetida", `ya la opcion se encuentra seleccionada`, 'warning');
    }

    this.controlselection.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(sucursal){
    const indice = this.sucursalesSeleccionadas.findIndex(s => s.nombre === sucursal.nombre);
    this.sucursalesSeleccionadas.splice(indice, 1);
    this.table.renderRows();
  }


}
