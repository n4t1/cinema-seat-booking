
export interface IBookedSeats {
  [key: string]: string;
}

export interface IBookedRoomSeats {
  room: number;
  booked_seats: IBookedSeats;
}

export interface IBookedUserSeats {
  id: string;
  room: number;
  booked_seats: IBookedSeats;
}
