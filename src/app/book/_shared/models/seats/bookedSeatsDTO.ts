import { IBookedRoomSeats, IBookedSeats, IBookedUserSeats } from './bookedSeatsREST.interface';
import { IDeserialize } from '@api/core';

export class BookedRoomSeatsDTO implements IDeserialize<BookedRoomSeatsDTO, IBookedRoomSeats>, IBookedRoomSeats {
  room: number;
  booked_seats: IBookedSeats;

  public deserialize(obj: IBookedRoomSeats): BookedRoomSeatsDTO {
    this.room = obj.room;
    this.booked_seats = obj.booked_seats;
    return this;
  }
}

export class BookedUserSeatsDTO implements IDeserialize<BookedUserSeatsDTO, IBookedUserSeats>, IBookedUserSeats {
  id: string;
  room: number;
  booked_seats: IBookedSeats;

  public deserialize(obj: IBookedUserSeats): BookedUserSeatsDTO {
    this.id = obj.id;
    this.room = obj.room;
    this.booked_seats = obj.booked_seats;
    return this;
  }
}
