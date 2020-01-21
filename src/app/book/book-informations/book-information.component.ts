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

  @Input() roomId: number;
  @Input() moviePlayId: number;
  @Input() selectedTimeNumber: number;

  private bookedUserSeats: TBookedSeatsMap;
  private sub: Subscription = new Subscription();

  constructor(
    private bookedSeatsService: BookedSeatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub.add(this.bookedSeatsService.obsBookedUserSeatsLocal.subscribe((val) => {
      this.bookedUserSeats = val;
      this.selectedSeatsCounter = this.bookedUserSeats.size;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public clickBookUserSeats() {
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
