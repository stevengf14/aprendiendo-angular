import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { 
    
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.apellido = params.apellido;
    });
  }

  redireccion(){
    this._router.navigate(['/test-page', 'Nicole', 'Latorre']);
  }

}
