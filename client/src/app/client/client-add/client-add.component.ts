import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  form:FormGroup
  constructor(fb:FormBuilder ,private router: Router,private clientService:ClientService){
    this.form=fb.group({
      name: ['', Validators.required], 
      last: ['',Validators.required],
      description: [''],
      contacts: [''],
      adress: [''],
      ville: [''],
      userId: [null],
      price: [0], 
      total: [0]  
    })

  }
  navigateTo(route:string){
    this.router.navigateByUrl('/'+route);
  }
ngOnInit(): void {
  
}
onSubmit() {
  // this.yourService.createData(this.form.value);
  const collectionName = 'Client';
  const data = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  this.clientService.createCollection(collectionName,this.form.value);
}

}
