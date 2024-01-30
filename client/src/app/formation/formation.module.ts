import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationAddComponent } from './formation-add/formation-add.component';
import { FormationUpdateComponent } from './formation-update/formation-update.component';
import { FormationDeleteComponent } from './formation-delete/formation-delete.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationComponent } from './formation.component';



@NgModule({
  declarations: [
    FormationAddComponent,
    FormationUpdateComponent,
    FormationDeleteComponent,
    FormationDetailComponent,
    FormationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormationModule { }
