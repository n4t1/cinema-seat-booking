import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModulesModule } from '@api/shared';
import { BookedSeatsService } from './booked-seats/booked-seats.service';



@NgModule({
  imports: [
    CommonModule,
    AngularFireModulesModule
  ],
  providers: [BookedSeatsService]
})
export class BookSharedServicesModule { }
