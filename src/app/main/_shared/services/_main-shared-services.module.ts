import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDbService } from './movie-db.service';



@NgModule({
  imports: [CommonModule],
  providers: [MovieDbService]
})
export class MainSharedServicesModule {}
