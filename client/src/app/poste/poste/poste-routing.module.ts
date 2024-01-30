import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteComponent } from '../poste.component';
import { PosteDetailComponent } from '../poste-detail/poste-detail.component';
import { PosteAddComponent } from '../poste-add/poste-add.component';
import { PosteUpdateComponent } from '../poste-update/poste-update.component';
import { PosteDeleteComponent } from '../poste-delete/poste-delete.component';

const routes: Routes = [
  {
    path:'',component:PosteComponent
  },
  {
    path:'detail/:id',component:PosteDetailComponent
  },
  {
    path:'add',component:PosteAddComponent
  },
  {
    path:'edit/:id',component:PosteUpdateComponent
  },
  {
    path:'delete/:id',component:PosteDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosteRoutingModule { }
