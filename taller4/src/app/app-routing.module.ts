import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './comp/noticias/noticias.component';

const routes: Routes = [
  {
    path: "noticias",
    component: NoticiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
