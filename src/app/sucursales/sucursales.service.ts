import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { sucursalCreacionDTO, sucursalDTO } from './sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'sucursales';

  public obtenerCombo(): Observable<sucursalDTO[]> {
    return this.http.get<sucursalDTO[]>(`${this.apiURL}/GetCombo`);
  }

  public obtenerPaginado(pagina: number, cantidadElementosAMostrar: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadElementosAMostrar.toString());
    return this.http.get<sucursalDTO[]>(this.apiURL, {observe:'response', params});
  }

  public obtenerPorId(id: number): Observable<sucursalDTO>{
    return this.http.get<sucursalDTO>(`${this.apiURL}/${id}`);
  }

  public crear(sucursalCreactionDTO: sucursalCreacionDTO){
    return this.http.post(this.apiURL, sucursalCreactionDTO);
  }

  public editar(id:number, sucursalCreacionDTO: sucursalCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, sucursalCreacionDTO);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
