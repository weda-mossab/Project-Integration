import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { SearchBarComponent } from '../../search-bar/search-bar.component';

// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    // SearchBarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // FormsModule
  ]
})
export class DashboardModule { }
