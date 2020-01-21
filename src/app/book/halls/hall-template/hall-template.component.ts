import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ISeatsRows } from '@api/shared';
import { BookedSeatsService, TBookedSeatsMap } from '@book/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hall-template',
  templateUrl: './hall-template.component.html',
  styleUrls: ['./hall-template.component.scss']
})
export class HallTemplateComponent implements OnInit, OnDestroy {
  @Input() public rows: ISeatsRows[] = [];
  @Input() public roomId: number;

  public bookedRoomSeats: TBookedSeatsMap;
  public bookedUserSeats: TBookedSeatsMap = new Map<number, string>();

  private sub: Subscription = new Subscription();

  constructor(
    private bookedSeatsService: BookedSeatsService
  ) {}

  ngOnInit() {
    this.sub.add(this.bookedSeatsService.obsBookedRoomSeats.subscribe((val) => {
      this.bookedRoomSeats = val;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public bookedUserSeatsChange(event: TBookedSeatsMap) {
    this.bookedUserSeats = event;
    this.bookedSeatsService.nextBookedUserSeatsLocal = this.bookedUserSeats;
    console.log('bookedUserSeatsChange', this.bookedUserSeats);
  }
}
