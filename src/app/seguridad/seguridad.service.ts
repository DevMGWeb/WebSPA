import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { credencialesUsuario, respuestaAutenticacion, usuarioDTO } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  baseURL = environment.apiUrl + 'cuentas';
  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'tokenExpiracion';
  private readonly campoRol = 'role';

  obtenerUsuarios(pagina: number, recordsPorPagina: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina);
    params = params.append('recordsPorPagina', recordsPorPagina);
    return this.http.get<usuarioDTO[]>(`${this.baseURL}/listadousuarios`, { observe:'response', params });
  }

  hacerAdmin(usuarioId: string){
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(`${this.baseURL}/hacerAdmin`, JSON.stringify(usuarioId),{headers});
  }

  removerAdmin(usuarioId: string){
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(`${this.baseURL}/removerAdmin`, JSON.stringify(usuarioId),{headers});
  }

  estaLogueado(): boolean {
    const token = localStorage.getItem(this.llaveToken);

    if(!token){
      return false;
    }

    const expiracion = localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha = new Date(expiracion);

    if(expiracionFecha <= new Date()){
      this.logout();
      return false;
    }
     
    return true;
  }

  logout(){
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  obtenerRol(): string{
    return this.obtenerCampoJWT(this.campoRol);
  }

  obtenerCampoJWT(campo:string):string{
    var token = localStorage.getItem(this.llaveToken);
    if(!token){  return ''; }
    var dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }

  registrar(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>{
    return this.http.post<respuestaAutenticacion>(`${this.baseURL}/crear`, credenciales);
  }

  login(credenciales: credencialesUsuario): Observable<respuestaAutenticacion>{
    return this.http.post<respuestaAutenticacion>(`${this.baseURL}/login`, credenciales);
  }

  guardarToken(respuestaAutenticacion: respuestaAutenticacion){
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString());
  }

  obtenerToken(){
    return localStorage.getItem(this.llaveToken);
  }
}
