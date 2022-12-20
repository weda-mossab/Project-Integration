import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile.component';

const routes: Routes = [
{path:'',component:AdminProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProfileRoutingModule { }
