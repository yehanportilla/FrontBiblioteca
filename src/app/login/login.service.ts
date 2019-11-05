
import { Respuesta } from './../model/Respuesta.model';
import { UsuarioModel } from './../model/usuario.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) { }

  //metodo para consultar por login y pwd
  public sesion(usuario: UsuarioModel): Observable<Respuesta> { 
    // creando una cadena codificada en base64 a partir del login y la contraseña
    var base64Credential: string = btoa( usuario.login+ ':' + usuario.contrasenia);
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','token': base64Credential})
    }
    
    return this.http.post<Respuesta>("/api/iniciosesion", JSON.stringify(usuario), httpOptions);
  }


/*  
  public sesion(usuario: UsuarioModel): Observable<Respuesta> { 
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }
    return this.http.post<Respuesta>("/api/iniciosesion",JSON.stringify(usuario), httpOptions)
    .pipe(map(usuario => {
          localStorage.setItem('currentUser', JSON.stringify(usuario));
      return usuario;
  }));
}*/


}
