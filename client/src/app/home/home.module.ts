import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { ClarityModule } from '@clr/angular';
// import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,ClarityModule,ClrIconModule ,FormsModule 
  ],exports:[  HomeComponent]
})
export class HomeModule { }
