import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { servicioCreacionDTO, servicioDTO, servicioPaqueteDTO } from './servicio';

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
    return this.http.get<servicioDTO[]>(this.apiURL, {observe:'response', params});
  }

  public obtenerPorId(id: number): Observable<servicioDTO> {
    return this.http.get<servicioDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerCombo(): Observable<servicioPaqueteDTO[]> {
    return this.http.get<servicioPaqueteDTO[]>(`${this.apiURL}/GetCombo`);
  }

  public crear(servicioCreacionDTO: servicioCreacionDTO){
    const formData = this.ConstruirFormData(servicioCreacionDTO);
    return this.http.post(this.apiURL, formData);
  }

  public editar(id:number, servicioCreacionDTO: servicioCreacionDTO){
    const formData = this.ConstruirFormData(servicioCreacionDTO);
    return this.http.put(`${this.apiURL}/${id}`, formData);
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

  ConstruirFormData(servicio: servicioCreacionDTO) : FormData{
    const formData = new FormData();
    formData.append('nombre', servicio.nombre);
    formData.append('valor', servicio.valor.toString());
    formData.append('descripcion', servicio.descripcion);
    formData.append('estado', servicio.estado.toString());
    formData.append('tipoServicioId', servicio.tipoServicioId.toString());

    if(servicio.foto){
      formData.append('foto', servicio.foto);
    }

    return formData;
  }
}
