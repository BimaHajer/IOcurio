import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';
// import { ClarityIcons, boltIcon, bugIcon, certificateIcon, homeIcon, sadFaceIcon, shieldIcon, storeIcon, userIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { PosteModule } from './poste/poste.module';
import { FormationModule } from './formation/formation.module';
import {CertificationModule} from './certification/certification.module'
// Firebase imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAZg6a4h5WsDbq34u9Mf-I2JhAOEluzERo",
  authDomain: "curioio.firebaseapp.com",
  projectId: "curioio",
  storageBucket: "curioio.appspot.com",
  messagingSenderId: "1034049074107",
  appId: "1:1034049074107:web:658eea8f2ca7a6b8894a9e",
  measurementId: "G-WJW6MT3CQ0"
};
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ClarityModule,ClrIconModule,FormsModule, 
    AuthModule,CoreModule,HomeModule,UserModule,PosteModule,CertificationModule,FormationModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
