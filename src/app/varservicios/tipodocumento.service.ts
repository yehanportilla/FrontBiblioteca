import { TipodocModel } from './../model/tipodoc.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  constructor(private http: HttpClient) { }
  public listipodoc(): Observable<TipodocModel[]> {
    return this.http.get<TipodocModel[]>("api/listipodoc");
  }

}
