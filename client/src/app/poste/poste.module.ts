import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
// import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'
import { PosteRoutingModule } from './poste/poste-routing.module';

import { PosteComponent } from './poste.component';
import { PosteDetailComponent } from './poste-detail/poste-detail.component';
import { PosteAddComponent } from './poste-add/poste-add.component';
import { PosteUpdateComponent } from './poste-update/poste-update.component';
import { PosteDeleteComponent } from './poste-delete/poste-delete.component';



@NgModule({
  declarations: [
    PosteComponent,
    PosteDetailComponent,
    PosteAddComponent,
    PosteUpdateComponent,
    PosteDeleteComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule, ClarityModule, ClrIconModule,PosteRoutingModule
  ]
})
export class PosteModule { }
