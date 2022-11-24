import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEventComponent } from './update-event.component';

const routes: Routes = [
  {path:'',component:UpdateEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateEventRoutingModule { }
