import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { servicioCreacionDTO, servicioDTO } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'servicios';

  public obtenerPaginado(pagina: number, cantidadElementosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<servicioDTO[]>(this.apiURL, { observe:'response', params})
  }

  public obtenerPorId(id: number): Observable<servicioDTO> {
    return this.http.get<servicioDTO>(`${this.apiURL}/${id}`);
  }

  public crear(servicioCreacionDTO: servicioCreacionDTO){
    return this.http.post(this.apiURL, servicioCreacionDTO);
  }

  public editar(id:number, servicioCreacionDTO: servicioCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, servicioCreacionDTO);
  }

  public borrar(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
