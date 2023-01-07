import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSignUpRoutingModule } from './admin-sign-up-routing.module';
import { AdminSignUpComponent } from './admin-sign-up.component';


@NgModule({
  declarations: [
    AdminSignUpComponent
  ],
  imports: [
    CommonModule,
    AdminSignUpRoutingModule
  ]
})
export class AdminSignUpModule { }
