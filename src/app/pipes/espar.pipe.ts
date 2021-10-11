import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform {
    transform(value: any) {
        var espar = "";
        if (value % 2 != 0) {
            espar = "no";
        }
        return "El año " + value + " " + espar + " es par.";
    }
}