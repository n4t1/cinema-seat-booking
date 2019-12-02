import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDbService } from './movie-db.service';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [MovieDbService]
})
export class MainSharedServicesModule {}
