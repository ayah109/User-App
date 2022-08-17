import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface UserVM{
  name: string,
  numb: number,
   age: number, 
   email:string,
   pass:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  UserList: UserVM[]=[
    {
      name:'Aya ',
      numb: 597902289,
      age: 22,
      email:'aya@kljlklfdkl.com',
      pass:12345
  }
   ];
  
public newUser: UserVM ={name:'', numb:0, age: 0, email:'', pass:0 }


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
  
