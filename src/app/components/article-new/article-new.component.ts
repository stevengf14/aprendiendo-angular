import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;

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
      attachPinBtn: 'Sube la imagen del artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = "CREAR ARTÍCULO";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._articleService.newArticle(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          // Alerta
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Arículo creado',
            showConfirmButton: false,
            timer: 1500
          });

          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al guardar el artículo!',
        });
        console.log(error);
      }
    )
  }

  imageUpload(data) {
    this.article.image = data.body.image;
  }
}
