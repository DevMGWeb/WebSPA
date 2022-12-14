import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SeguridadService } from '../seguridad/seguridad.service';
import { SubmenuComponent } from './submenu/submenu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output()
  onShowing: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  copyThisLink(){
    console.log("Haz copiado el link");
  }

  toggleSidenav(){
    this.onShowing.emit();
  }
}
