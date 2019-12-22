import { Injectable } from '@angular/core';
import { BookedRoomSeatsDTO, BookedUserSeatsDTO } from '../../models';

@Injectable()
export class BookedSeatsService {

  /** collection: book -> document: booked-room-seats -> collection: rooms -> document: id: number, booked_seats: [string, string][]
   *                                                                       -> ...
   *
   *                   -> document: booked-user-seats -> collection: users -> document: id: string, booked_seats: [string, string][]
   *                                                                       -> ...
   *
   */

  constructor() { }

  public getBookedRoomSeats() {

  }

  public setBookedRoomSeats(bookedSeats: BookedRoomSeatsDTO) {

  }

  public getBookedUserSeats() {

  }

  public setBookedUserSeats(bookedSeats: BookedUserSeatsDTO) {

  }

}
