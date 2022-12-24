import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student.component';

const routes: Routes = [
{path:"",component:UpdateStudentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateStudentRoutingModule { }
