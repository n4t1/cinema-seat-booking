import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { IEmptySpace } from '@api/shared';
import { BookedSeatsService, TBookedSeatsMap } from '@book/shared';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  public readonly seatSpaceEnum = SeatSpaceEnum;
  @Input() public row: number;
  @Input() public emptySpacePerRowNumber: IEmptySpace;
  @Input() public seatsPerRowNumber: number;

  public seatsPerRow: ISeat[];
  public bookedSeats: TBookedSeatsMap;

  @ViewChildren('seatNumber') private seatNumber: QueryList<ElementRef>;

  constructor(
    private renderer2: Renderer2,
    private bookedSeatsService: BookedSeatsService
  ) {
  }

  ngOnInit() {
    this.setSeatsPerRowArray();

    this.bookedSeatsService.getBookedRoomSeats.subscribe((val) => {
        this.bookedSeats = val;
        this.seatsPerRow.forEach(el => {
        const bookedSeat: string = val.get(this.seatId(el.id));
        if (bookedSeat != undefined) {
          if (bookedSeat.length === 0) { // === null is booked, userID is booked by user
            el.space = SeatSpaceEnum.BOOKED;
            // if (el.id === bookedUserSeats) { // TODO
            //   show Notification
            // }
            console.log('BookComponent', val);
          }
        }
      });
    });
  }

  public selectSeat(seat: ISeat) {
    const nativeElement = this.seatNumber.toArray()[seat.id].nativeElement;

    if (seat.space === SeatSpaceEnum.SELECTED) {
      this.renderer2.removeClass(nativeElement, 'select');
      this.renderer2.addClass(nativeElement, 'unselect');
      seat.space = SeatSpaceEnum.DEFAULT;
      this.bookedSeatsService.deleteBookedUserSeats(this.seatId(seat.id));
    } else {
      this.renderer2.removeClass(nativeElement, 'unselect');
      this.renderer2.addClass(nativeElement, 'select');
      seat.space = SeatSpaceEnum.SELECTED;
      this.bookedSeatsService.setBookedUserSeats(this.seatId(seat.id));
      this.bookedSeats.set(this.seatId(seat.id), 'userId');
      this.bookedSeatsService.setBookedRoomSeats(this.bookedSeats);
    }
  }

  private setSeatsPerRowArray() {
    this.seatsPerRow = new Array<ISeat>(this.seatsPerRowNumber).fill({} as ISeat).map((el, i) => {
      return {
        seatNumber: i + 1,
        formControl: this.seatNumberFormControlName(i),
        space: this.isEmptySpace(i),
        id: i
      };
    });
  }

  private seatNumberFormControlName(seatNumber: number): string {
    return `seatNumber${seatNumber}`;
  }

  private isEmptySpace(seatNumber: number): SeatSpaceEnum {
    if (!this.emptySpacePerRowNumber) { return SeatSpaceEnum.DEFAULT; }
    const toSeat: number =  this.emptySpacePerRowNumber.fromSeat + this.emptySpacePerRowNumber.emptySpaceNumber;
    return (seatNumber >= this.emptySpacePerRowNumber.fromSeat && seatNumber < toSeat) ? SeatSpaceEnum.EMPTY : SeatSpaceEnum.DEFAULT;
  }

  private seatId(seatNumber: number): number {
    return seatNumber * (this.row + 1);
  }

  // public rowForm: FormGroup;
  // private setSeatNumberFormControls() {
  //   const formControls: { [k: string]: FormControl } = {};
  //   this.seatsPerRow.forEach(el => {
  //     formControls[el.formControl] = new FormControl('');
  //   });
  //   this.rowForm = new FormGroup(formControls);
  // }
}

enum SeatSpaceEnum {
  EMPTY,
  BOOKED,
  SELECTED,
  DEFAULT
}

interface ISeat {
  seatNumber: number;
  formControl: string;
  id: number;
  space: SeatSpaceEnum;
}
