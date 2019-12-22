import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RepertuarService } from '@shared/services/repertuar/repertuar.service';
import { MovieTMDBService } from '@shared/services/movie-tmdb/movie-tmdb.service';
import { HallsService } from '@shared/services/halls/halls.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RepertuarService, MovieTMDBService, HallsService]
})
export class SharedServicesModule {}
