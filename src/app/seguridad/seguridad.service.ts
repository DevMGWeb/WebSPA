import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { credencialesUsuario, respuestaAutenticacion } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private http: HttpClient) { }

  private readonly llaveToken = 'token';
  private readonly llaveExpiracion = 'tokenExpiracion';

  baseURL = environment.apiUrl + 'cuentas';

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
    return 'Admin';
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
}
