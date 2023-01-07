import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSignUpComponent } from './admin-sign-up.component';

const routes: Routes = [
  {path:'',component:AdminSignUpComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSignUpRoutingModule { }
