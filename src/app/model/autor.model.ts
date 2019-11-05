import { GeneroModel } from "./genero.model";

export class AutorModel{
    public id:Number;
	public nombre:String;
	public apellido:String;
	public anioautor:Number;
	public genero: GeneroModel; // para traer el campo id y descripcion de genero.
}