import { Component,OnInit } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, homeIcon } from '@cds/core/icon'
import { ClrIconModule } from '@clr/angular';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';// 1 st step
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={login:"hajjajihajer@gmail.com",
        password:"0000"
        
}
form:FormGroup// step number 2
test: boolean=false;
constructor(private fb:FormBuilder){
  this.form= fb.group({ //step number
       typeOption:['',Validators.required],
       email:['email',[Validators.email,Validators.required]],
       password:['password',Validators.required]
  })
  
}
ngOnInit(): void {
  
}
onInputChange(event:Event){
  console.log("form",this.form.value)
}
submit() {
  this.test=false
  if (!(this.form.valid)) {
    this.test=true
    console.log('Form Data:');
  } else {
    
  console.log("hello log ")
  }

}
}
