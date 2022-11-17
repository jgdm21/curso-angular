import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { ActionSeriesComponent } from './action-series/action-series.component';


@NgModule({
  declarations: [
    ActionSeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
