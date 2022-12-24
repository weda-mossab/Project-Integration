import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateStudentRoutingModule } from './update-student-routing.module';
import { UpdateStudentComponent } from './update-student.component';


@NgModule({
  declarations: [
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    UpdateStudentRoutingModule
  ]
})
export class UpdateStudentModule { }
