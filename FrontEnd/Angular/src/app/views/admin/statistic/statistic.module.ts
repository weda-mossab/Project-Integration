import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { StatisticComponent } from './statistic.component';


@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ]
})
export class StatisticModule { }
