import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tipoServicioCreacionDTO, tipoServicioDTO } from './tipo-servicio';

@Injectable({
  providedIn: 'root'
})
export class TipoServiciosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'tiposervicios';

  public obtenerPaginado(pagina: number, cantidadElementosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<tipoServicioDTO[]>(this.apiURL, {observe:'response', params});
  }

  public obtenerCombo(): Observable<tipoServicioDTO[]>{
    return this.http.get<tipoServicioDTO[]>(`${this.apiURL}/GetCombo`);
  }

  public obtenerPorId(id: number): Observable<tipoServicioDTO>{
    return this.http.get<tipoServicioDTO>(`${this.apiURL}/${id}`);
  }

  public crear(tipoServicio: tipoServicioCreacionDTO){
    const formData = this.ConstruirFormData(tipoServicio);
    return this.http.post(this.apiURL, formData);
  }

  public editar(id:number, tipoServicio: tipoServicioCreacionDTO){
    const formData = this.ConstruirFormData(tipoServicio);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public anular(id: number) {
    return this.http.delete(`${this.apiURL}/softdelete/${id}`);
  }

  public activar(id: number) {
    return this.http.put(`${this.apiURL}/setactive/${id}`,{});
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  ConstruirFormData(tipoServicio: tipoServicioCreacionDTO) : FormData{
    const formData = new FormData();
    formData.append('nombre', tipoServicio.nombre);
    formData.append('descripcion', tipoServicio.descripcion);
    formData.append('estado', tipoServicio.estado.toString());
    formData.append('mostrarEnElMenuPrincipal', tipoServicio.estado.toString());

    if(tipoServicio.poster){
      formData.append('poster', tipoServicio.poster);
    }

    return formData;
  }
}
