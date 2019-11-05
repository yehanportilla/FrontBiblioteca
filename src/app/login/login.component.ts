import { Router } from '@angular/router';
import { UsuarioModel } from './../model/usuario.model';
import { LoginService } from './login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]// inyectamos los rervicios

})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin: NgForm;

  usuario: UsuarioModel;
  enviafrm: boolean = true;
   
  constructor(private LoginService: LoginService, private router: Router) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit() {
    this.enviafrm = false;
  }
  public sesion(): void {
    if (this.formLogin.valid) {

      this.LoginService.sesion(this.usuario).subscribe(
        res => {
          if (res.codigo == 1) {
           // alert(res.mensaje);
            this.router.navigate(['/CrearAutorComponent']);
          } else {
            alert("ERROR!!! " + res.mensaje);
          }
        },
        error => {
          console.log(JSON.stringify(error));
        }

      );
    } else {
      // muestra texto campo requerido
      this.enviafrm = true;
    }

  }

}
