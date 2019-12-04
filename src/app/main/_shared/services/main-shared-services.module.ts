import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieTMDBService } from "./movie-tmdb/movie-tmdb.service";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [MovieTMDBService]
})
export class MainSharedServicesModule {}
