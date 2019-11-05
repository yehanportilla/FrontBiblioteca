import { GeneroModel } from './../model/genero.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";// usamos HttpClientModule para llamar los servicios
import { Observable } from 'rxjs';

@Injectable()
export class GeneroService {
  constructor(private http: HttpClient) { }

  //metodo para listar los generos
  public listaGeneros():Observable<GeneroModel[]>{
    return this.http.get<GeneroModel[]>("/api/listageneros");
  }

}
