// Importar los módulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales les quiero hacer una página exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'form', component: FormComponent},
    {path: 'test-page', component: PageComponent},
    {path: 'test-page/:nombre', component: PageComponent},
    {path: 'test-page/:nombre/:apellido', component: PageComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el módulo de rutas
export const appRoutingProviders : any[] = [];
// Versiones inferiores a angular 10
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
