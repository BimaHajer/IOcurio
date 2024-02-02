import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {CertificationModule} from './certification/certification.module'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ClarityModule,ClrIconModule,FormsModule,
    AuthModule,CoreModule,HomeModule,UserModule,PosteModule,CertificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
