import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  titulares:string[] = ["Masaje Relajante", "Hidroterapia", "Esteticos"]

  ngOnInit(): void {
    console.log(this.titulares);
  }

}
