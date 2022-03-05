import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  employee: any;

  constructor() { 
    this.employee = {
      id:234,
      name:"Mansukh"
    },
    {
      id:244,
      name:"Mansi "
    }
  }
  display(){
    return "Welcome to to mumbai";
  }
}
