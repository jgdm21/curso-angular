import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ActionMoviesComponent } from './action-movies/action-movies.component';

@NgModule({
  declarations: [ActionMoviesComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
