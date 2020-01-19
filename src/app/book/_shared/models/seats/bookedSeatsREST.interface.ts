export type TBookedSeatsREST = {key: number, value: string}[];

export interface IBookedRoomSeats {
  booked_seats: TBookedSeatsREST;
}

export interface IBookedUserSeats {
  id: string;
  roomId: number;
  booked_seats: TBookedSeatsREST;
}
