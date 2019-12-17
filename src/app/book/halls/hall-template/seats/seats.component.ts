import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {
  @Input() public row;
  @Input() public emptySpacePerRowNumber: IEmptySpace;
  @Input() public seatsPerRowNumber: number;

  public seatsPerRow: ISeat[];

  public rowForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.setSeatsPerRowArray();
    this.setSeatNumberFormControls();
  }

  private setSeatsPerRowArray() {
    this.seatsPerRow = new Array<ISeat>(this.seatsPerRowNumber).fill({} as ISeat).map((el, i) => {
      return {
        seatNumber: ++i,
        formControl: this.seatNumberFormControlName(i),
        isEmptySpace: this.isEmptySpace(i)
      };
    });
  }

  private seatNumberFormControlName(seatNumber: number): string {
    return `seatNumber${seatNumber}`;
  }

  private isEmptySpace(seatNumber: number): boolean {
    if (!this.emptySpacePerRowNumber) { return false; }
    const toSeat: number = this.emptySpacePerRowNumber.fromSeat + this.emptySpacePerRowNumber.emptySpaceNumber;
    return this.emptySpacePerRowNumber.fromSeat < seatNumber && seatNumber <= toSeat;
  }

  private setSeatNumberFormControls() {
    const formControls: { [k: string]: FormControl } = {};
    this.seatsPerRow.forEach(el => {
      formControls[el.formControl] = new FormControl('');
    });
    this.rowForm = new FormGroup(formControls);
  }
}

interface ISeat {
  seatNumber: number;
  formControl: string;
  isEmptySpace: boolean;
}

export interface IEmptySpace {
  emptySpaceNumber: number;
  fromSeat: number;
}
