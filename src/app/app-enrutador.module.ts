import { CrearLoginComponent } from './crear-login/crear-login.component';
import { LoginComponent } from './login/login.component';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { AutorComponent } from './autor/autor.component';
import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
const rutas:Routes = [
    { path: '', redirectTo: '/LoginComponent',pathMatch: 'full'},
    { path: 'appComponent', component: AppComponent},
    { path: 'AutorComponent', component: AutorComponent}, // mostrar grilla de lista de autores
    { path: 'CrearAutorComponent', component: CrearAutorComponent},// para mostrar formulario crear autor
    { path: 'LoginComponent', component: LoginComponent}, // para mostrar el login
    { path: 'CrearLoginComponent', component: CrearLoginComponent} // mostrar frm registro usuarios
];

@NgModule({

    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule],
  
})
export class AppEnrutadorModulo {}