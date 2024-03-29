import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth.component';
import { LoginComponent } from '../login/login.component';
import { SignInComponent } from '../sign-in/sign-in.component';
const routes: Routes = [
  {path:"",component:AuthComponent},
{path:"login/",component:LoginComponent},
{path:"sign/",component:SignInComponent}
];
// {path:"addresse, component : name_class_component}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingRoutingModule { }
