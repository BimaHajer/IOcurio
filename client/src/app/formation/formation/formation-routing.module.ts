import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormationAddComponent } from '../formation-add/formation-add.component';
import { FormationUpdateComponent } from '../formation-update/formation-update.component';
import { FormationDeleteComponent } from '../formation-delete/formation-delete.component';
import { FormationDetailComponent } from '../formation-detail/formation-detail.component';
import { FormationComponent } from '../formation.component';
const routes: Routes = [
  {
    path:'',component:FormationComponent
  },
  {
    path:'detail-formation',component:FormationDetailComponent },
  {
    path:'add-formation',component:FormationAddComponent
  },
  {
    path:'update-formation',component:FormationUpdateComponent
  },
  {
    path:'delete-formation',component:FormationDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
