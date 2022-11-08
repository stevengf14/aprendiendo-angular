import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;
  public image_delete: boolean;
  public old_image: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = "MODIFICAR ARTÍCULO";
    this.url = Global.url;
    this.image_delete = false;
  }

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'upload-image/',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Actualiza la imagen del artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
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
    })
  }

  onSubmit() {
    if (this.image_delete) {
      this._articleService.deleteImage(this.old_image).subscribe(
        response => {
          if (response.status == 'success') {
            this._articleService.update(this.article._id, this.article).subscribe(
              response => {
                if (response.status == 'success') {
                  this.status = 'success';
                  this.article = response.article;
                  // Alerta
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Arículo modificado',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  this._router.navigate(['/blog/article', this.article._id]);
                } else {
                  this.status = 'error';
                }
              }, error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Error al modificar el artículo!',
                });
                console.log(error);
              });
          } else {
            this.status = 'error';
          }
        }, error => {
          console.log(error);
        });
    } else {
      this._articleService.update(this.article._id, this.article).subscribe(
        response => {
          if (response.status == 'success') {
            this.status = 'success';
            this.article = response.article;
            // Alerta
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Arículo modificado',
              showConfirmButton: false,
              timer: 1500
            });
            this._router.navigate(['/blog/article', this.article._id]);
          } else {
            this.status = 'error';
          }
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error al modificar el artículo!',
          });
          console.log(error);
        });
    }
  }



  imageUpload(data) {
    if (this.article.image) {
      this.old_image = this.article.image;
      this.image_delete = true;
    }
    this.article.image = data.body.image;
  }
}
