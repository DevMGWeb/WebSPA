import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  titulares:string[] = ["Masaje Relajante", "Hidroterapia", "Esteticos"]
  longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat nihil impedit, obcaecati architecto commodi voluptate mollitia perferendis non blanditiis praesentium illo minima at ab dolor autem, nam eos tempora."
  ngOnInit(): void {
    console.log(this.titulares);
  }

}
