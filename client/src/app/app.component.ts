import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any | null;
  clrVerticalNavCollapsed: boolean=true

  constructor(private afAuth: AngularFireAuth,private appService: AppService) {}

  ngOnInit() {
    console.log("hello")
    this.createNewCollection()
    this.afAuth.authState.subscribe(user => {
      this.user = user;
    });
    
  }
  createNewCollection() {
    const collectionName = 'my-new-collection';
    const data = {
      name: "John Doe",
      age: 30,
      city: "New York"
    };
    this.appService.createCollection(collectionName, data);
  }
}
