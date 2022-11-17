import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionSeriesComponent } from './action-series/action-series.component';

const routes: Routes = [
  {
    path: '',
    component: ActionSeriesComponent,
  },
  {
    path: 'action-series',
    component: ActionSeriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesRoutingModule {}
