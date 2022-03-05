import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CompenylistComponent } from './compenylist/compenylist.component';
import { CompenyRouting } from './compeny-routing.module';




@NgModule({
  declarations: [
    CompenylistComponent,
    CompenylistComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompenyRouting
  ]
})
export class CompenyModule { }
