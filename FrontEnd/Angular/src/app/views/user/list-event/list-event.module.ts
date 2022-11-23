import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventRoutingModule } from './list-event-routing.module';
import { ListEventComponent } from './list-event/list-event.component';


@NgModule({
  declarations: [
    ListEventComponent
  ],
  imports: [
    CommonModule,
    ListEventRoutingModule
  ]
})
export class ListEventModule { }
