import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import  { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

  // Se ejecuta primero
  // No debe ir lógica aquí
  constructor(private _peliculaService: PeliculaService) { 
    this.titulo = "Componente películas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2021,3,23);
  }

  // Se ejecuta después del constructor
  // Se puede meter funcionalidad
  ngOnInit(): void {
    console.log("Evento oninit");
    console.log(this._peliculaService.holaMundo());
  }

  // Se ejecuta cuando ocurre un cambio en el componente
  ngDoCheck(){
    console.log("DoCheck lanzado");
  }

  cambiarTitulo(){
    this.titulo = "Una historia de amor";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar de la ejecución");
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
    console.log(event.pelicula);
  }
}
