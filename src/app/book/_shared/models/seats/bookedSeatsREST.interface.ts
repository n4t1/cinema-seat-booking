export type TBookedSeatsREST = [string, boolean][];

export interface IBookedRoomSeats {
  room: number;
  booked_seats: TBookedSeatsREST;
}

export interface IBookedUserSeats {
  id: string;
  room: number;
  booked_seats: TBookedSeatsREST;
}
