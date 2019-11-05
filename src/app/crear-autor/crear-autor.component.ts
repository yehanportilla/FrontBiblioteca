
import { GeneroService } from './../genero/genero.service';
import { GeneroModel } from './../model/genero.model';
import { CreautorService } from './creautor.service';
import { AutorModel } from './../model/autor.model';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css'],
  providers: [CreautorService, GeneroService] //inyectamos los servicios para crear el autor

})
export class CrearAutorComponent implements OnInit {

  @ViewChild('frmguardautor')frmguardautor: NgForm;

  generos: GeneroModel[];// creo varible genero para llamar la clase Generos en combobox
  private autor: AutorModel;  //Creo variable para el formulario de crear autor para llamar el modelo de entidad
  private esvalido: boolean = true; // Creo la variable para validacion de campo.
  private mensaje: String = ""; // Creo la variable para mensaje error.
  private regExitoso: boolean = false; // varibale de registro exitoso para mostrar mensaje
  private valiupdate: boolean=false; // valido si ingreso por editar

  generoSelected:GeneroModel=null;

  // creo la variable para llamar los servicios
  constructor(private CreautorService: CreautorService, private GeneroService: GeneroService,
    private router: Router) {
     

    // invoco el objeto editar
    if (sessionStorage.getItem("autor")) {
      this.autor = JSON.parse(sessionStorage.getItem("autor"));// para castear 
      sessionStorage.clear();
      this.valiupdate=true;

      if(this.autor.genero!=null){
        this.generoSelected = this.autor.genero;
      }
      console.log(JSON.stringify(this.autor));
    } else {
      this.autor = new AutorModel(); // llamo la varible autor para el formulario 
      this.generoSelected=new GeneroModel();
    }
  }
  ngOnInit() {
    this.leerGeneros();
     sessionStorage.clear();
    
  }
  //metodo para cargar el combobox
  private leerGeneros() {
    this.GeneroService.listaGeneros().subscribe(
      res => {
        this.generos = res;
        console.log(res);
      });
  }
  //Creamos metodo despues de invocado el servicio guardautores
  public guardarAutor(): void {
    this.esvalido = this.CreautorService.validacampos(this.autor);

    if (this.esvalido) 
    {
      this.autor.genero = this.generoSelected;
      this.CreautorService.guardarAutor(this.autor).subscribe(
        res => {
     
      if(this.valiupdate==true){ // cuando se actualiza el autor
         this.router.navigate(['/AutorComponent']);
      }    
    else if (res.codigo == 200) // cuando se registra el nuevo autor.
         { 
            this.regExitoso = true;
            
          }
        }, error => {
          console.log(JSON.stringify(error));
        });
      
    } else {
      this.mensaje = "El Campo Nombres es Obligatorio...";
      this.regExitoso = false;
    }
    sessionStorage.clear(); // para que  limpie al editar un autor
    

  }
  // para que muestre el genero asociado en el combobox al seleccionar un autorde la grilla
  validarSelected(item1:GeneroModel, item2:GeneroModel):boolean{
    return item1.id===item2.id;
  }

  onSubmit(){
    if(this.frmguardautor.valid){
      this.frmguardautor.reset();

    }

  }


}
