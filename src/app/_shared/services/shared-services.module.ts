import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepertuarService } from './repertuar/repertuar.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieTMDBService } from './movie-tmdb/movie-tmdb.service';
import { HallsService } from '@shared/services/halls/halls.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RepertuarService, MovieTMDBService, HallsService]
})
export class SharedServicesModule {}
