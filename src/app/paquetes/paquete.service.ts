import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { paqueteCreacionDTO, paqueteDTO } from './paquete';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  private apiURL = environment.apiUrl + 'paquetes';

  constructor(private http: HttpClient) { }

  public obtenerPaginado(pagina: number, cantidadElementosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<paqueteDTO[]>(this.apiURL, {observe:'response', params});
  }

  public obtenerPorId(id: number): Observable<paqueteDTO> {
    return this.http.get<paqueteDTO>(`${this.apiURL}/${id}`);
  }

  public crear(paqueteCreacionDTO: paqueteCreacionDTO){
    return this.http.post(this.apiURL,paqueteCreacionDTO);
  }

  public editar(id:number, paqueteCreacionDTO: paqueteCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, paqueteCreacionDTO);
  }

  public anular(id:number){
    return this.http.delete(`${this.apiURL}/softdelete/${id}`);
  }

  public activar(id: number) {
    return this.http.put(`${this.apiURL}/setactive/${id}`,{});
  }

  public borrar(id:number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
