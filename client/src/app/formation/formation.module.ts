import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation/formation-routing.module';

import { FormationAddComponent } from './formation-add/formation-add.component';
import { FormationUpdateComponent } from './formation-update/formation-update.component';
import { FormationDeleteComponent } from './formation-delete/formation-delete.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationComponent } from './formation.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormationAddComponent,
    FormationUpdateComponent,
    FormationDeleteComponent,
    FormationDetailComponent,
    FormationComponent
  ],
  imports: [
    CommonModule,ClarityModule,ClrIconModule,
    FormsModule,ReactiveFormsModule,FormationRoutingModule
  ]
})
export class FormationModule { }
