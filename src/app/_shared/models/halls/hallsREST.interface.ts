export interface IEmptySpace {
  fromSeat: number;
  emptySpaceNumber: number;
}

export interface ISeatsRows {
  seatsPerRowNumber: number;
  emptySpacePerRowNumber?: IEmptySpace;
}

export interface IHall {
  id: number;
  rows: ISeatsRows[];
}

export interface IHalls {
  halls: IHall[];
}
