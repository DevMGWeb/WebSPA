import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios/servicios.service';
import { TipoServicioLandingPageDTO, ServicioLandingPageDTO } from '../landing-page/LandingPageDTO';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private serviciosService: ServiciosService) { }

  TipoServicios: TipoServicioLandingPageDTO[];

  titulares:string[] = []
  longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugiat nihil impedit, obcaecati architecto commodi voluptate mollitia perferendis non blanditiis praesentium illo minima at ab dolor autem, nam eos tempora."
  
  ngOnInit(): void {
    this.serviciosService.obtenerLandingPage()
      .subscribe({
        next: (response) => {
          this.TipoServicios = response.tiposServicios;
        }
    })

  }

}
