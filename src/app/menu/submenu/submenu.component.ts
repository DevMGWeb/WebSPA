import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  @Input()
  isShowing: boolean;
  
  hasBackdrop = true;

  name = "Sally";

  constructor() { }

  ngOnInit(): void {
  }

  LogOff(){
    console.log("Cerrar Session");
  }

}
