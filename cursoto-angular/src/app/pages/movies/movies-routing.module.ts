import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionMoviesComponent } from './action-movies/action-movies.component';

const routes: Routes = [
  {
    path: '',
    component: ActionMoviesComponent,
  },
  {
    path: 'action-movies',
    component: ActionMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
