export interface IEmptySpace {
  fromSeat: number;
  emptySpaceNumber: number;
}

export interface ISeats {
  seatsPerRowNumber: number;
  emptySpacePerRowNumber: IEmptySpace;
}

export interface IHall {
  id: number;
  layout: ISeats[];
}

export interface IHalls {
  halls: IHall[];
}
