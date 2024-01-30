import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AuthRoutingModule } from '../auth-routing/auth-routing.module';
import { ClarityModule } from '@clr/angular';
// import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,ClarityModule, ClrIconModule ,FormsModule ,AuthRoutingModule,ReactiveFormsModule
  ],exports:[
    AuthComponent,
    LoginComponent,
    SignInComponent]
})
export class AuthModule { }
