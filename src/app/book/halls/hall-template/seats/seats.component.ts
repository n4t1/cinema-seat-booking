import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmptySpace } from '@api/shared';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  @Input() public row: number;
  @Input() public emptySpacePerRowNumber: IEmptySpace;
  @Input() public seatsPerRowNumber: number;

  public seatsPerRow: ISeat[];
  public rowForm: FormGroup;

  public seatSpaceEnum = SeatSpaceEnum;

  constructor() {
  }

  ngOnInit() {
    this.setSeatsPerRowArray();
    this.setSeatNumberFormControls();
  }

  private setSeatsPerRowArray() {
    this.seatsPerRow = new Array<ISeat>(this.seatsPerRowNumber).fill({} as ISeat).map((el, i) => {
      return {
        seatNumber: i + 1,
        formControl: this.seatNumberFormControlName(i),
        space: this.isEmptySpace(i),
        id: this.seatId(i)
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

  private setSeatNumberFormControls() {
    const formControls: { [k: string]: FormControl } = {};
    this.seatsPerRow.forEach(el => {
      formControls[el.formControl] = new FormControl('');
    });
    this.rowForm = new FormGroup(formControls);
  }
}

enum SeatSpaceEnum {
  EMPTY,
  BOOKED,
  DEFAULT
}

interface ISeat {
  seatNumber: number;
  formControl: string;
  id: number;
  space: SeatSpaceEnum;
}
