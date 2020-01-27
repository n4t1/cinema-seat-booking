import { IBookedRoomSeats, IBookedUserSeats } from './bookedSeatsREST.interface';
import { IDeserialize } from '@api/core';

export type TBookedSeatsMap = Map<number, string>;

export class BookedRoomSeatsDTO implements IDeserialize<BookedRoomSeatsDTO, IBookedRoomSeats> {
  bookedSeats: TBookedSeatsMap;

  public static serialize(dto: BookedRoomSeatsDTO): IBookedRoomSeats {
    return {
      booked_seats: Array
        .from(dto.bookedSeats.entries())
        .map((el) => {
          return {
            key: el[0],
            value: el[1]
          };
        })
    };
  }

  public deserialize(obj: IBookedRoomSeats): BookedRoomSeatsDTO {
    this.bookedSeats = new Map(obj.booked_seats.map(el => [el.key, el.value]));
    return this;
  }
}

export class BookedUserSeatsDTO implements IDeserialize<BookedUserSeatsDTO, IBookedUserSeats> {
  id: string;
  roomId: number;
  playedMovieId: number;
  selectedTimeNumber: number;
  bookedSeats: TBookedSeatsMap;
  email?: string;
  firstName?: string;
  lastName?: string;
  tel?: string;

  public static serialize(dto: BookedUserSeatsDTO): IBookedUserSeats {
    return {
      id: dto.id,
      roomId: dto.roomId,
      played_movieId: dto.playedMovieId,
      selected_time_number: dto.selectedTimeNumber,
      booked_seats: Array
        .from(dto.bookedSeats.entries())
        .map((el) => {
          return {
            key: el[0],
            value: el[1]
          };
        }),
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      tel: dto.tel,
    };
  }

  public deserialize(obj: IBookedUserSeats): BookedUserSeatsDTO {
    this.id = obj.id;
    this.roomId = obj.roomId;
    this.playedMovieId = obj.played_movieId;
    this.selectedTimeNumber = obj.selected_time_number;
    this.bookedSeats = new Map(obj.booked_seats.map(el => [el.key, el.value]));
    return this;
  }
}
