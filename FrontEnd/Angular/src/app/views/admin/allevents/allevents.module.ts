import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlleventsRoutingModule } from './allevents-routing.module';
import { AlleventsComponent } from './allevents.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AlleventsComponent,
    SearchBarComponent,

  ],
  imports: [
    CommonModule,
    AlleventsRoutingModule,
    FormsModule,
    NgxPaginationModule

  ]
})
export class AlleventsModule {






 }
