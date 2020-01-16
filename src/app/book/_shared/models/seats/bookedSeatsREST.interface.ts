export type TBookedSeatsREST = [number, boolean][];

export interface IBookedRoomSeats {
  roomId: number;
  booked_seats: TBookedSeatsREST;
}

export interface IBookedUserSeats {
  id: string;
  roomId: number;
  booked_seats: TBookedSeatsREST;
}
