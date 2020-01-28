import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BookedSeatsService, TBookedSeatsMap } from '@book/shared';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-information',
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.scss']
})
export class BookInformationComponent implements OnInit, OnDestroy {
  public selectedSeatsCounter = 0;
  public showBookedUserSeatsNotification = false;
  public maxAllowedBookedUserSeat: number;
  public allowedBookedUserSeat = true;

  @Input() roomId: number;
  @Input() moviePlayId: number;
  @Input() selectedTimeNumber: number;

  private bookedUserSeats: TBookedSeatsMap;
  private sub: Subscription = new Subscription();

  constructor(
    private bookedSeatsService: BookedSeatsService,
    private router: Router
  ) {
    this.maxAllowedBookedUserSeat = this.bookedSeatsService.maxAllowedBookedUserSeatsLocal;
  }

  ngOnInit() {
    this.sub.add(this.bookedSeatsService.obsBookedUserSeatsLocal.subscribe((val) => {
      this.bookedUserSeats = val;
      this.selectedSeatsCounter = this.bookedUserSeats.size;
    }));

    this.sub.add(this.bookedSeatsService.obsShowBookedUserSeatsNotification.subscribe((val) => {
      if (this.showBookedUserSeatsNotification !== val) {
        this.showBookedUserSeatsNotification = val;
      }
    }));

    this.sub.add(this.bookedSeatsService.obsAllowedBookedUserSeats.subscribe((val) => {
      if (this.allowedBookedUserSeat !== val) {
        this.allowedBookedUserSeat = val;
      }
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public clickBookUserSeats() {
    this.showBookedUserSeatsNotification = false;
    this.bookedSeatsService.getBookedUserSeatsDoc(
      this.roomId,
      this.moviePlayId,
      this.selectedTimeNumber,
      this.bookedUserSeats
    ).subscribe(() => {
      this.selectedSeatsCounter = 0;
      this.router.navigate(['login']);
    });
  }
}
