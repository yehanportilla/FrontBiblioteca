import { TipousuModel } from './../model/tipousu.model';
import { UsuarioModel } from './../model/usuario.model';
import { TipodocumentoService } from './../varservicios/tipodocumento.service';
import { TipousuarioService } from './../varservicios/tipousuario.service';
import { CrealoginService } from './crealogin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-login',
  templateUrl: './crear-login.component.html',
  styleUrls: ['./crear-login.component.css']
})
export class CrearLoginComponent implements OnInit {
  //rolusuario: TipousuModel[]; 
  private usuario: UsuarioModel;
  private esvalido: boolean = true;
  private regExitoso: boolean = false;
  private mensaje: String = "";

  //rolusuarioSelected:TipousuModel=null;

  constructor(private CrealoginService: CrealoginService,
    private TipousuarioService: TipousuarioService,
    private TipodocumentoService: TipodocumentoService,
    private router: Router) {
   
     //if(this.usuario.tipousu!=null){
    //    this.rolusuarioSelected=this.usuario.tipousu;
    // }else{
      this.usuario = new UsuarioModel(); // llamo la varible usuario para el formulario evita error CONTEXT
   //   this.rolusuarioSelected=new TipousuModel(); 
   // }

     
  }
  ngOnInit() {
    //this.rolusuarios();
  }
//Metodo para leer los tipos de usuarios
/*
  private rolusuarios() {
    this.TipousuarioService.listipousu().subscribe(
    res=>{
      this.rolusuario = res;
     });
    
    }*/


  /**
   * Metodo para guardar el usaurio
   */
  public guardaUsuario(): void {
    this.esvalido = this.CrealoginService.validacampos(this.usuario);
    if (this.esvalido) {
     // this.usuario.tipousu=this.rolusuarioSelected;
      this.CrealoginService.guardarUsuario(this.usuario)
        .subscribe(
          res => {
            if (res.codigo == 200) {
              this.regExitoso = true;
            }
          },
          error => {
            console.log(JSON.stringify(error));
          }
        );
    } else {
      this.mensaje = "El Campo Login es Obligatorio...";
      this.regExitoso = false;
    }
  }
 // valrolusuSelected(item1:TipousuModel, item2:TipousuModel):boolean{
  // return item1.id===item2.id;
  //}

}
