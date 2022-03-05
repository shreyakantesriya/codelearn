import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray } from '@angular/forms';
import { formgroup } from '../formgroup';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  // singupForm:FormGroup;
  fname!: string;
  lname!: string;
  email!: string;
  password!: string;


  FormGroup!: FormGroup;
  // formgroup!: FormGroup;
  TotalRow!: number;
  form: any;
  constructor(private _fb: FormBuilder) {
    // this.singupForm = frmbuilder.group({
    //   fname:[null,Validators.required],
    //   // lname:new FormControl(),
    //   lname:[null,[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
    //   email:[null,[Validators.required,Validators.email]],
    //   password:[null,Validators.required]


    // })
  }

  ngOnInit(): void {
    this.FormGroup = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });


    // this.singupForm.get("fname")?.valueChanges.subscribe(
    //   name=>{
    //     console.log("Fname is valuechange: "+ name);

    //   }
    // )
    // this.singupForm.valueChanges.subscribe((form:formgroup)=>{
    //   console.log("Fname is valuechange: "+ form.fname);
    //   console.log("lname is valuechange: "+ form.lname);
    //   console.log("email is valuechange: "+ form.email);
    //   console.log("password is valuechange: "+ form.password);
    // });
    // this.singupForm.get("lname")?.statusChanges.subscribe(
    //   name=>{
    //     console.log("Fname is statusChange: "+ name);

    //   }
    // )
    //  this.singupForm?.statusChanges.subscribe(
    //     name=>{
    //       console.log("form is statusChange: "+ name);

    //     }
    //   )
    // const arr = new FormArray([
    //   new FormControl(),
    //   new FormControl(),

    // ]);
    // arr.setValue(["Shoham","Shakshi"]);
    // console.log(arr.value);
    // console.log(arr.status);

    this.form = new FormGroup({
      ContactNo: new FormArray([
        new FormControl("9586150345"),
        new FormControl("9980150345")
      ]),
    })

  }
  initItemRow() {
    return this._fb.group({
      RollNo: [''],
      name: [''],
      MobileNo: [''],
      class: ['']
    })

  }
  addRow(){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    control.push(this.initItemRow());

  }
  deleterow(index:number){
    const control = <FormArray>this.FormGroup.controls['itemRows'];
    if(control!=null){
      this.TotalRow = control.value.length;
    }
    if(this.TotalRow>1){
      control.removeAt(index);
    }
    else{
      alert("One recode is mandatory");
      // return false;
    }
  }
  addContactNo() {
    this.form.get("ContactNo").push(new FormControl());
  }
  onSubmit() {
    console.log(this.form.get("ContactNo").value);
    console.log(this.form.value);
  }
  setPreset() {
    this.form.get("ContactNo").patchValue(["6454054161", "9034123145"]);
    console.log(this.setPreset());
    this.setPreset()


  }
  // PostData(){
  //  this.fname= this.singupForm.get('fname')?.value,
  //  this.lname= this.singupForm.controls.lname.value,
  //  this.email= this.singupForm.controls.email.value,

  //  this.password = this.singupForm.controls.password.value
  //  console.log(this.fname);
  //  console.log(this.lname);
  //  console.log(this.email);
  //  console.log(this.password);

  //   console.log(this.singupForm.controls);

  // }
  // restForm(){
  //   this.singupForm.reset()
  // }
  // fillForm(){
  //   this.singupForm.setValue({
  //     "fname":"Shre",
  //     "lname":"Lokhndvala",
  //     "email":"xaz@gmail.com",
  //     "password":"1234"
  //   })
  //   // console.log(this.fillForm());
  //   this.fillForm()
  // }
}
