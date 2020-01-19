import { IBookedRoomSeats, IBookedUserSeats } from './bookedSeatsREST.interface';
import { IDeserialize } from '@api/core';

export type TBookedSeatsMap = Map<number, string>;

export class BookedRoomSeatsDTO implements IDeserialize<BookedRoomSeatsDTO, IBookedRoomSeats> {
  bookedSeats: TBookedSeatsMap;

  public deserialize(obj: IBookedRoomSeats): BookedRoomSeatsDTO {
    this.bookedSeats = new Map(obj.booked_seats.map(el => [el.key, el.value]));
    return this;
  }
}

export class BookedUserSeatsDTO implements IDeserialize<BookedUserSeatsDTO, IBookedUserSeats> {
  id: string;
  roomId: number;
  bookedSeats: TBookedSeatsMap;

  public deserialize(obj: IBookedUserSeats): BookedUserSeatsDTO {
    this.id = obj.id;
    this.roomId = obj.roomId;
    this.bookedSeats = new Map(obj.booked_seats.map(el => [el.key, el.value]));
    return this;
  }
}
