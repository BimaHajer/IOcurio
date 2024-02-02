import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationModule } from './formation/formation.module';

const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'client',loadChildren:()=>import('./client/client.module').then(m=>m.ClientModule)},
  {path:'formation',loadChildren:()=>import('./formation/formation.module').then(m=>m.FormationModule)},
  {path:'poste',loadChildren:()=>import('./poste/poste.module').then(m=>m.PosteModule)},
  {path:'certification',loadChildren:()=>import('./certification/certification.module').then(m=>m.CertificationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
