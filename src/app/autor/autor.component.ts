
import { Component, OnInit } from '@angular/core';
import { AutorService } from './autor.service';
import { AutorModel } from '../model/autor.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],

  providers: [AutorService] //inyectamos los servicios creados para listar autores
})
export class AutorComponent implements OnInit {
  private autores: Array<AutorModel>// creamos variable correspondiente  a los autores con el modelo ya creado
  private regEliminado: boolean = false; //para mensaje al eliminar el autor
  constructor(private autorService: AutorService, private router: Router) { }

  ngOnInit() { // metodo Inicial
    this.leerAutores();
  }

  private leerAutores(): void {//cargamos usuarios una ves ingresamos a esta pantalla
    this.autorService.getAutores().subscribe(
      res => {
        this.autores = res;
        console.log(res);// imprime en consola de chrome
      });
  }
  //creo el evento para editar
  public edit(autor: AutorModel) {
    sessionStorage.setItem('autor', JSON.stringify(autor));// objeto de tipo sesion para guardar el autor
    this.router.navigate(['/CrearAutorComponent']);// redirecciono a la pantalla guardar autores para llenar los campos importo Router
    
  }

  //creo el evento eliminar
  public eliminar(autor: AutorModel): void {
    this.autorService.eliminar(autor).subscribe(
      (data) => {
        if (data.codigo=1) {
      
         this.regEliminado=true
         this.leerAutores();
         
        

        } else {
          alert("ERROR!!! " + data.mensaje);
        }
      }, (error) => {
        alert("Los servicios no estan disponibles!!");
      }
    );


  }




}