import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { IEmptySpace } from '@api/shared';
import { BookedSeatsService, TBookedSeatsMap } from '@book/shared';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  public readonly seatSpaceEnum = SeatSpaceEnum;
  public seatsPerRow: ISeat[];

  @ViewChildren('seatNumber') private seatNumber: QueryList<ElementRef>;

  @Input() public row: number;
  @Input() public emptySpacePerRowNumber: IEmptySpace;
  @Input() public seatsPerRowNumber: number;
  @Input() public allowedBookedUserSeats = true;

  @Input()
  private set bookedRoomSeats(val: TBookedSeatsMap) {
    if (val == undefined) {
      return;
    }
    this._bookedRoomSeats = val;
    this.seatsPerRowCreated$.subscribe(() => {
      this.seatsPerRow.forEach((el) => {
        const bookedSeat: string = val.get(this.seatId(el.id));
        if (bookedSeat != undefined) {
          if (el.space !== SeatSpaceEnum.EMPTY) {
            el.space = SeatSpaceEnum.BOOKED;
            if (this.bookedUserSeats.has(this.seatId(el.id))) {
              this.bookedSeatsService.nextShowBookedUserSeatsNotification = true;
              el.isBookedByOtherUser = true;
            }
          }
        }
      });
    });
  }
  private get bookedRoomSeats() {
    return this._bookedRoomSeats;
  }
  private _bookedRoomSeats: TBookedSeatsMap;
  private seatsPerRowCreated$: AsyncSubject<void> = new AsyncSubject<void>();

  @Input() private bookedUserSeats: TBookedSeatsMap;
  @Output() private bookedUserSeatsChange: EventEmitter<TBookedSeatsMap> = new EventEmitter<TBookedSeatsMap>();
  private set emitSetBookedUserSeatsChange(seatsId: number) {
    this.bookedUserSeats.set(this.seatId(seatsId), '');
    this.bookedUserSeatsChange.emit(this.bookedUserSeats);
  }
  private set emitDeletedBookedUserSeatsChange(seatsId: number) {
    this.bookedUserSeats.delete(this.seatId(seatsId));
    this.bookedUserSeatsChange.emit(this.bookedUserSeats);
  }
  @Input() private set clickSeat(val: boolean) {
    this.hideBookedUserSeatsNotification();
  }

  constructor(
    private renderer2: Renderer2,
    private bookedSeatsService: BookedSeatsService
  ) {
  }

  ngOnInit() {
    this.setSeatsPerRowArray();
  }

  public selectSeat(seat: ISeat) {
    const nativeElement = this.seatNumber.toArray()[seat.id].nativeElement;

    if (seat.space === SeatSpaceEnum.SELECTED) {
      this.renderer2.removeClass(nativeElement, 'select');
      this.renderer2.addClass(nativeElement, 'unselect');
      seat.space = SeatSpaceEnum.DEFAULT;
      this.emitDeletedBookedUserSeatsChange = seat.id;
    } else {
      this.renderer2.removeClass(nativeElement, 'unselect');
      this.renderer2.addClass(nativeElement, 'select');
      seat.space = SeatSpaceEnum.SELECTED;
      this.emitSetBookedUserSeatsChange = seat.id;
    }
  }

  private setSeatsPerRowArray() {
    this.seatsPerRow = new Array<ISeat>(this.seatsPerRowNumber).fill({} as ISeat).map((el, i) => {
      const seat: ISeat = {
        space: this.isEmptySpace(i),
        seatNumber: i + 1,
        id: i,
        formControl: null,
        isBookedByOtherUser: false
      };
      if (seat.space === SeatSpaceEnum.EMPTY) {
        seat.seatNumber = null;
        return seat;
      }
      seat.formControl = this.seatNumberFormControlName(seat.seatNumber);
      return seat;
    });
    this.seatsPerRowCreated$.next();
    this.seatsPerRowCreated$.complete();
  }

  private seatNumberFormControlName(seatNumber: number): string {
    return `seatNumber${seatNumber}`;
  }

  private isEmptySpace(seatNumber: number): SeatSpaceEnum {
    if (!this.emptySpacePerRowNumber) {
      return SeatSpaceEnum.DEFAULT;
    }
    const toSeat: number = this.emptySpacePerRowNumber.fromSeat + this.emptySpacePerRowNumber.emptySpaceNumber;
    return (seatNumber >= this.emptySpacePerRowNumber.fromSeat && seatNumber < toSeat) ? SeatSpaceEnum.EMPTY : SeatSpaceEnum.DEFAULT;
  }

  private seatId(seatNumber: number): number {
    return (this.row * 100) + seatNumber; // TODO: improve alg to calc seatId
  }

  // public rowForm: FormGroup;
  // private setSeatNumberFormControls() {
  //   const formControls: { [k: string]: FormControl } = {};
  //   this.seatsPerRow.forEach(el => {
  //     formControls[el.formControl] = new FormControl('');
  //   });
  //   this.rowForm = new FormGroup(formControls);
  // }

  private hideBookedUserSeatsNotification() {
    this.seatsPerRowCreated$.subscribe(() => {
      this.bookedSeatsService.nextShowBookedUserSeatsNotification = false;
      this.seatsPerRow.forEach((el) => {
        if (el.isBookedByOtherUser) {
          el.isBookedByOtherUser = false;
          this.emitDeletedBookedUserSeatsChange = el.id;
        }
      });
    });
  }
}

enum SeatSpaceEnum {
  EMPTY = 'EMPTY',
  BOOKED = 'BOOKED',
  SELECTED = 'SELECTED',
  DEFAULT = 'DEFAULT'
}

interface ISeat {
  seatNumber: number;
  formControl: string;
  id: number;
  space: SeatSpaceEnum;
  isBookedByOtherUser: boolean;
}
