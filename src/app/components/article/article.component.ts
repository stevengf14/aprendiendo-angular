import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent {

  public article: Article;
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          }
          else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id, image) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Los cambios no se podrán revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        if (image) {
          this._articleService.deleteImage(image).subscribe(
            response => {
              this._articleService.delete(id).subscribe(
                response => {
                  this._router.navigate(['/blog']);
                },
                error => {
                  console.log("Error eliminando artículo: ", error);
                  this._router.navigate(['/blog']);
                }
              );
            },
            error => {
              console.log("Error eliminando imagen: ", error);
            }
          );
        } else {
          this._articleService.delete(id).subscribe(
            response => {
              this._router.navigate(['/blog']);
            },
            error => {
              console.log("Error eliminando artículo: ", error);
              this._router.navigate(['/blog']);
            }
          );
        }
        Swal.fire(
          'Eliminado',
          'Artículo eliminado!',
          'success'
        );
      }
    });
  }
}
