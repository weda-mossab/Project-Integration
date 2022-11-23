import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlleventsRoutingModule } from './allevents-routing.module';
import { AlleventsComponent } from './allevents.component';


@NgModule({
  declarations: [
    AlleventsComponent
  ],
  imports: [
    CommonModule,
    AlleventsRoutingModule
  ]
})
export class AlleventsModule { }
