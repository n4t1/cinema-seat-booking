import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookedSeatsService } from './bookedSeats/booked-seats.service';
import { AngularFireModulesModule } from '@shared/modules/angular-fire-modules.module';



@NgModule({
  imports: [
    CommonModule,
    AngularFireModulesModule
  ],
  providers: [BookedSeatsService]
})
export class BookSharedServicesModule { }
