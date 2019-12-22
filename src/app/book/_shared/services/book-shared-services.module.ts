import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModulesModule } from '@shared/modules/angular-fire-modules.module';
import { BookedSeatsService } from '@book/shared/services/bookedSeats/booked-seats.service';



@NgModule({
  imports: [
    CommonModule,
    AngularFireModulesModule
  ],
  providers: [BookedSeatsService]
})
export class BookSharedServicesModule { }
