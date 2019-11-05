import { UsuarioModel } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from './../model/Respuesta.model';



@Injectable({
  providedIn: 'root'
})
export class CrealoginService {

constructor(private http: HttpClient) { }

//Metodo para validar campos obligatorios.
public validacampos(usuario:UsuarioModel):boolean{
  let esvalido = true;
  if(!usuario.login){
    esvalido=false;
  }
  return esvalido;
}
// creo metodo para llamar servicio de  guardar usuario
public guardarUsuario(usuario: UsuarioModel): Observable<Respuesta> {
  const httpOptions ={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  return this.http.post<Respuesta>("/api/guardausuario",JSON.stringify(usuario),httpOptions);
}

}
