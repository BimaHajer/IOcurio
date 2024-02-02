import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
// import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import  { CertificationRoutingModule} from  './certification/certification-routing.module';

import { CertificationAddComponent } from './certification-add/certification-add.component';
import { CertificationUpdatrComponent } from './certification-updatr/certification-updatr.component';
import { CertificationDeleteComponent } from './certification-delete/certification-delete.component';
import { CertificationDetailComponent } from './certification-detail/certification-detail.component';
import { CertificationComponent } from './certification.component';



@NgModule({
  declarations: [
    CertificationAddComponent,
    CertificationUpdatrComponent,
    CertificationDeleteComponent,
    CertificationDetailComponent,
    CertificationComponent
  ],
  imports: [
    CommonModule,CertificationRoutingModule,FormsModule ,ReactiveFormsModule ,ClarityModule,ClrIconModule
  ],exports: []
})
export class CertificationModule { }
