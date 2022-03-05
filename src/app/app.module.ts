import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import { SchoolNameModule } from './school-name/school-name.module';
import { StudentComponent } from './student/student.component';
import { MyPipePipe } from './my-pipe.pipe';
import { StudentRigtionComponent } from './student-rigtion/student-rigtion.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagrNotFoundComponent } from './pagr-not-found/pagr-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    MyPipePipe,
    StudentRigtionComponent,
    StudentdetailsComponent,
    PagrNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchoolNameModule,
    FormsModule
  ],
  providers: [MyserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("this is module");
    
  }
 }
