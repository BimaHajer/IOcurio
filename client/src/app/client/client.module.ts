import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientComponent } from './client.component';



@NgModule({
  declarations: [
    ClientAddComponent,
    ClientDetailComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    ClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
