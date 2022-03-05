import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRigtionComponent } from './student-rigtion/student-rigtion.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagrNotFoundComponent } from './pagr-not-found/pagr-not-found.component';

const routes: Routes = [
  // {
  //   path:'studentRigtion',pathMatch:'full'
  // },

  {
    path: 'studentRigtion',
    children: [{
      path: '', component: StudentRigtionComponent
    },
    {
      path: 'studentdetails', component: StudentdetailsComponent
    },
    {
      path: 'student', component: StudentComponent

    }],

  },

  {
    path: '**', component: PagrNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
