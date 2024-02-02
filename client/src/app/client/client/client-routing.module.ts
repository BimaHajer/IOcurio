import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAddComponent } from '../client-add/client-add.component';
import { ClientDetailComponent } from '../client-detail/client-detail.component';
import { ClientUpdateComponent } from '../client-update/client-update.component';
import { ClientDeleteComponent } from '../client-delete/client-delete.component';
import { ClientComponent } from '../client.component';
const routes: Routes = [
  
  {
    path:'',component:ClientComponent
  },
  {
    path:'detail-client',component:ClientDetailComponent },
  {
    path:'add-client',component:ClientAddComponent
  },
  {
    path:'update-client',component:ClientUpdateComponent
  },
  {
    path:'delete-client',component:ClientDeleteComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
