import { Component , OnInit} from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  user={ id:3 , name:"hajer",lastName:'fahem'}
  updateForm :FormGroup
  constructor(private fb: FormBuilder){
    this.updateForm=fb.group({
      id:[this.user.id,Validators.required],
      name:[this.user.name,Validators.required],
      lastName:[this.user.lastName,Validators.required]
    })

  }
  ngOnInit(): void {
    
  }

}
