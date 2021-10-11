import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(this.user);
  }

  hasDadoClick(){
    alert("Has dado click");
  }

  hasSalido(){
    alert("Has salido");
  }

  hasDadoEnter(){
    alert("Has dado enter");
  }

  hasKeyup(){
    alert("Has keyup");
  }
}
