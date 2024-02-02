import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationAddComponent } from '../certification-add/certification-add.component';
import { CertificationUpdatrComponent } from '../certification-updatr/certification-updatr.component';
import { CertificationDeleteComponent } from '../certification-delete/certification-delete.component';
import { CertificationDetailComponent } from '../certification-detail/certification-detail.component';
import { CertificationComponent } from '../certification.component';
const routes: Routes = [
  {path:"" ,component:CertificationComponent},
  {path:"add" ,component:CertificationAddComponent },
  {path:"edit" ,component:CertificationUpdatrComponent },
  {path:"delete" ,component: CertificationDeleteComponent  },
  {path:"detail" ,component: CertificationDetailComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationRoutingModule { }
