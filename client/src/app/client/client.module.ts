import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
// import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ClientRoutingModule } from './client/client-routing.module';
// component
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
    CommonModule,ClarityModule,ClrIconModule,
    FormsModule,ReactiveFormsModule,ClientRoutingModule
  ]
})
export class ClientModule { }
