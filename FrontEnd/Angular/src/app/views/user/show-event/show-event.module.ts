import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowEventRoutingModule } from './show-event-routing.module';
import { ShowEventComponent } from './show-event.component';


@NgModule({
  declarations: [
    ShowEventComponent
  ],
  imports: [
    CommonModule,
    ShowEventRoutingModule
  ]
})
export class ShowEventModule { }
