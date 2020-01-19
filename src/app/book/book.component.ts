import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookedSeatsService } from '@book/shared';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public moviePlayId: number;
  public roomId: number;
  public selectedTime: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookedSeatsService: BookedSeatsService
  ) {
  }

  ngOnInit() {
    this.getParamMap();
  }

  private getParamMap() {
    this.moviePlayId = +this.activatedRoute.snapshot.paramMap.get('moviePlayId');
    this.roomId = +this.activatedRoute.snapshot.paramMap.get('roomId');
    const selectedTimeNumber: number = +this.activatedRoute.snapshot.paramMap.get('selectedTimeNumber');
    this.selectedTime = new Date(selectedTimeNumber);

    this.bookedSeatsService.getBookedRoomSeatsDoc(this.roomId, this.moviePlayId, selectedTimeNumber);
  }
}
