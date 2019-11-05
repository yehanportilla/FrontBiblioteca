import { TipousuModel } from './tipousu.model';
import { TipodocModel } from './tipodoc.model';
export class UsuarioModel{
    public id: Number;
    public nombre: String;
    public login: String;
    public apellido: String;
    public contrasenia: String;
    public numdocumento: String;
    public tipodoc: TipodocModel;
    public tipousu: TipousuModel;
}