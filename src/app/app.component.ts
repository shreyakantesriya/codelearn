import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormsModule, NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regForm !: FormGroup;
  fname!:string;
  lname!:string;
  Address!:string;
  DOB!: Date;
  email!:string;
  IsAccepted:number = 0;
  title = 'AngularMaterial';
  
  constructor(private fb:FormBuilder){
    this.regForm = fb.group({
      fname:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      lname:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      Address:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(100)]],
      DOB:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      IsAccepted:[null]
    })
  }
  onChange(event:any){
    if(event.checked==true){
      this.IsAccepted = 1;
    }
    else{
      this.IsAccepted=0;
    }
  }
  onFormSubmit(form:NgForm){
    console.log(form);
    
  }

}

