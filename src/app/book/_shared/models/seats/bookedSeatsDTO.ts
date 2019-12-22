import { IBookedRoomSeats, IBookedUserSeats } from './bookedSeatsREST.interface';
import { IDeserialize } from '@api/core';

export type TBookedSeatsMap = Map<string, boolean>;

export class BookedRoomSeatsDTO implements IDeserialize<BookedRoomSeatsDTO, IBookedRoomSeats> {
  room: number;
  bookedSeats: TBookedSeatsMap;

  public deserialize(obj: IBookedRoomSeats): BookedRoomSeatsDTO {
    this.room = obj.room;
    this.bookedSeats = new Map(obj.booked_seats);
    return this;
  }
}

export class BookedUserSeatsDTO implements IDeserialize<BookedUserSeatsDTO, IBookedUserSeats> {
  id: string;
  room: number;
  bookedSeats: TBookedSeatsMap;

  public deserialize(obj: IBookedUserSeats): BookedUserSeatsDTO {
    this.id = obj.id;
    this.room = obj.room;
    this.bookedSeats = new Map(obj.booked_seats);
    return this;
  }
}
