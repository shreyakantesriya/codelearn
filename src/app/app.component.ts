import { Component } from '@angular/core';
import { user } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  user = new user
  constructor(){

  }
  Register(form:any){
    if(form.invalid){
      return;
    }
    console.log('User name:' + form.controls['uname'].value);
    console.log('gender:' + form.controls['gender'].value);
    console.log('married?:' + form.controls['married'].value);
    console.log('TCAccepted:' + form.controls['TCAccepted'].value);
    
  }
  Reste(form:any){
    this.user = new user()
    form.Reset({
      married:false
    })
  }
  setDefulatValue(){
    this.user.uname='Manjo';
    this.user.gender="male";
    this.user.isMarried=false;
    this.user.isTCAccepted=true;

  }
 
  ngOnInit(){

  }
  // Register(regForm:any){
    
  //   debugger;
  //   var fname = regForm.value.fname
  //   var lname = regForm.value.lname
  //   var email = regForm.value.email
  //   console.log(regForm);
    
  // }
}
