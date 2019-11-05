import { TipousuModel } from './../model/tipousu.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  constructor(private http: HttpClient) { }
  public listipousu(): Observable<TipousuModel[]> {
    return this.http.get<TipousuModel[]>("api/listipousu");
  }

}
