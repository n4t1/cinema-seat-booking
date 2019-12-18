import { Component, OnInit } from '@angular/core';
import { IEmptySpace } from './seats/seats.component';

@Component({
  selector: 'app-hall-template',
  templateUrl: './hall-template.component.html',
  styleUrls: ['./hall-template.component.scss']
})
export class HallTemplateComponent implements OnInit {

  public rows: ISeatsRows[] = [
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 14,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 20,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 20,
      emptySpacePerRowNumber: {
        fromSeat: 11,
        emptySpaceNumber: 3
      }
    },
    {
      seatsPerRowNumber: 20,
      emptySpacePerRowNumber: null
    },
  ];

  public hallName = 'Sala 3';

  constructor() { }

  ngOnInit() {
  }

}

interface ISeatsRows {
  seatsPerRowNumber: number;
  emptySpacePerRowNumber: IEmptySpace;
}
