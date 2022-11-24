import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowEventComponent } from './show-event.component';

const routes: Routes = [
  {path:'',component:ShowEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowEventRoutingModule { }
