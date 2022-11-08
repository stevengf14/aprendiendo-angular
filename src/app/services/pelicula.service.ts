import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman No way home", 2021, "https://img.metroecuador.com.ec/sites/6/2021/04/17/spiderman-no-way-home-1200x600.jpg"),
            new Pelicula("Avengers Infinity War", 2018, "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3F8378A6BFA45A3778A1AD4F1B3F690A58FECBA064988703ED4F98C98B0FC045/scale?width=1200&aspectRatio=1.78&format=jpeg"),
            new Pelicula("Avengers EndGame", 2019, "https://lumiere-a.akamaihd.net/v1/images/690x0w_f1b0509a.jpeg?region=0%2C0%2C690%2C1035")
        ];
    }
    holaMundo() {
        return 'Hola Mundo desde Angular';
    }

    getPeliculas() {
        return this.peliculas;
    }
}