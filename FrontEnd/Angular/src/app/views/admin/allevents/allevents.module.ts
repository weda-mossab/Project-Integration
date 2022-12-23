import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlleventsRoutingModule } from './allevents-routing.module';
import { AlleventsComponent } from './allevents.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AlleventsComponent,
    SearchBarComponent,

  ],
  imports: [
    CommonModule,
    AlleventsRoutingModule,
    FormsModule,

  ]
})
export class AlleventsModule {






 }
