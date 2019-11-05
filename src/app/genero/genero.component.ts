import { GeneroModel } from './../model/genero.model';
import { GeneroService } from './genero.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
  providers:[GeneroService] //inyecto servicio de lsitar genero 
})
export class GeneroComponent implements OnInit {

  private generos: Array<GeneroModel>// creo varible genero para llamar la clase Generos
  constructor(private GeneroService:GeneroService) { }
  ngOnInit() {//metodo inicial

    this.leerGeneros();
  }
     private leerGeneros() {
       
       this.GeneroService.listaGeneros().subscribe(
         res =>{
             this.generos=res;
             console.log(res);
         });

     }
}
