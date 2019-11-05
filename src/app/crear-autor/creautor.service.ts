import { AutorModel } from './../model/autor.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";// usamos HttpClientModule para llamar los servicios
import { Observable } from 'rxjs';
import { Respuesta } from './../model/Respuesta.model';



@Injectable({
  providedIn: 'root'
})
export class CreautorService {
  constructor(private http: HttpClient) { } // llamamos la varible HttpClient en el constructor

//Metodo para validar campos obligatorios.
public validacampos(autor:AutorModel):boolean{
  let esvalido = true;
  if(!autor.nombre){
    esvalido=false;
  }
  return esvalido;
}
//Creo metodo para llamar el servicio guardautores
public guardarAutor(autor: AutorModel):Observable<Respuesta> {
 const httpOptions ={
   headers: new HttpHeaders({'Content-Type':'application/json'})
 }
 return this.http.post<Respuesta>("/api/guardautores",JSON.stringify(autor),httpOptions);
}
}