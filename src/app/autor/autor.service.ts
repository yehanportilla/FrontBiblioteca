
import { AutorModel } from '../model/autor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";// usamos HttpClientModule para llamar los servicios
import { Observable } from 'rxjs';
import { Respuesta } from '../model/Respuesta.model';

@Injectable()
export class AutorService {

  constructor(private http: HttpClient) { } // usamos el HttpClient
 
  //metodo para listar los autores
  public getAutores(): Observable<AutorModel[]> {// creamos el metodo para llamar el  servicio listado autores
    return this.http.get<AutorModel[]>("/api/listautores");
  }

  //metodo para eliminar un autor
  public eliminar(autor: AutorModel): Observable<Respuesta> {
    let optionseliminar = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: autor
    }
    return this.http.delete<Respuesta>("/api/eliminarautor/" + autor.id);
  }

}



