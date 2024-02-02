import { Component ,OnInit} from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormsModule  } from '@angular/forms';
import { UserServiceService } from './user-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
  userp=2
  id=3
  showAlert: boolean=false;
  data: any;
  constructor(private serviceUser:UserServiceService){

  }
  ngOnInit(): void {
    this.serviceUser.getJsonData().subscribe(data=>{
      this.data=data["data"]
      console.log('data',data)
    })
  }
 
  delete(){
    this.showAlert= true; 
   this.userp=this.id

  }
  closeAction(){
    this.showAlert=false
  }
}
