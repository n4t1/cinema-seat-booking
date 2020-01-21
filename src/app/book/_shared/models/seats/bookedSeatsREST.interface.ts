export type TBookedSeatsREST = {key: number, value: string}[];

export interface IBookedRoomSeats {
  booked_seats: TBookedSeatsREST;
}

export interface IBookedUserSeats {
  id: string;
  roomId: number;
  played_movieId: number;
  selected_time_number: number;
  booked_seats: TBookedSeatsREST;
}
