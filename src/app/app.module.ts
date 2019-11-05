import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'; //para que inicie autor
import { FormsModule, ReactiveFormsModule } from "@angular/forms";//Importamos modulo formulario para crear los autores

import {HttpClientModule} from "@angular/common/http";// recuperar la lista de autores de la BD
import { AppComponent } from './app.component';
import { AppEnrutadorModulo } from './app-enrutador.module';
import { AutorComponent } from './autor/autor.component';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { GeneroComponent } from './genero/genero.component';
import { LoginComponent } from './login/login.component';
import { CrearLoginComponent } from './crear-login/crear-login.component';

@NgModule({
  declarations: [
    LoginComponent, 
    AppComponent,
    AutorComponent,       //listar Autores (se agrega cuando creamos el componente autor)
    CrearAutorComponent,   //guarda Autores (se agrega cuando creamos el componente crear_autor)
    GeneroComponent, 
    CrearLoginComponent
  ],
  imports: [
    BrowserModule,
    AppEnrutadorModulo, //importo modulo enrutador (y se agrega cada componente para navegar entre paginas)
    RouterModule,
    HttpClientModule,
    FormsModule,         // Importo @angular/forms
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
