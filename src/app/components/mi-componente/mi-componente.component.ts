import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
    
})
export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Nicole + Steven";
        this.comentario = "Mi hermosa novia :3";
        this.year = 2021;
        this.mostrarPeliculas = true;
        console.log("Componente mi-componente cargado");
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}