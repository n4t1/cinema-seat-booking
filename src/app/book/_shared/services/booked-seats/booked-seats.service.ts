import { Injectable } from '@angular/core';
import { BookedRoomSeatsDTO, BookedUserSeatsDTO } from '../../models';

@Injectable()
export class BookedSeatsService {
  private bookedUserSeats: BookedUserSeatsDTO;
  private bookedRoomSeats: BookedRoomSeatsDTO;

  /** collection: book -> document: booked-room-seats -> collection: rooms -> document: id: number, booked_seats: [string, string][]
   *                                                                       -> ...
   *
   *                   -> document: booked-user-seats -> collection: users -> document: id: string, booked_seats: [string, string][]
   *                                                                       -> ...
   *
   */

  constructor() {
    this.bookedUserSeats = new BookedUserSeatsDTO();
    this.bookedUserSeats.bookedSeats = new Map<number, boolean>();
    this.bookedRoomSeats = new BookedRoomSeatsDTO();
  }

  public setBookedSeatsInformation(roomId: number) {
    this.bookedUserSeats.roomId = roomId;
    this.bookedRoomSeats.roomId = roomId;
  }

  public getBookedRoomSeats() {

  }

  public setBookedRoomSeats(bookedSeats: BookedRoomSeatsDTO) {

  }

  public getBookedUserSeats() {

  }

  public saveBookedUserSeats(bookedSeats: BookedUserSeatsDTO) {

  }

  public setBookedUserSeats(seatId: number) {
    this.bookedUserSeats.bookedSeats.set(seatId, true);
  }

  public deleteBookedUserSeats(seatId: number) {
    this.bookedUserSeats.bookedSeats.delete(seatId);
  }

}
