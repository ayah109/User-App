import { Component, OnInit, Output, Input } from "@angular/core";
import { Form, NgForm } from '@angular/forms';


interface UserVM{
  name: string,
  numb: number,
   age: number, 
   email:string,
   pass:number;
}

@Component({
    selector: 'app-User_form',
    templateUrl: './user_form.component.html',
    styleUrls: ['./user_form.component.css']
    
  })
 
export class user_formComponent implements OnInit {
  
  @Input() public newUser: UserVM ={name:'', numb:0, age: 0, email:'', pass:0 }
  @Input() UserList: UserVM[]=[
    {
      name:'Aya ',
      numb: 597902289,
      age: 22,
      email:'aya@gmail.com',
      pass:12345
  },
  {
    name:'Bayan ',
    numb: 597511401,
    age: 16,
    email:'bayan@gmail.com',
    pass:123123
}
   ];

  constructor() { }
  ngOnInit(): void {
    
  
  }
  addUser(form: NgForm){
    console.log(form.form.value,this.newUser);
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }else{
      this.UserList.push(this.newUser);
    }
  }
  deleteUser(user:UserVM){
    let i = this.UserList.indexOf(user);
    if (i>= 0){
      this.UserList.splice(i,1);
    }
  }
  

 

}
