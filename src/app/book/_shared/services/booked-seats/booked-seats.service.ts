import { Injectable } from '@angular/core';
import { BookedRoomSeatsDTO, BookedUserSeatsDTO, IBookedRoomSeats, TBookedSeatsMap, TBookedSeatsREST } from '../../models';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class BookedSeatsService {
  private bookedUserSeats: BookedUserSeatsDTO;

  /** collection: book -> document: booked_room_seats -> collection: rooms -> collection: playedMovies -> collection: dates -> collection: booked_seats -> document: key: string, value: string [string, string][]
   *                                                                                                                                                    -> ...
   *
   *                   -> document: booked-user-seats -> collection: users -> collection: booked_seats -> document: key: string, value: string [string, string][]
   *                                                                                                   -> ...
   *
   */

  private bookedRoomSeatsDoc: AngularFirestoreDocument<IBookedRoomSeats>;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.bookedUserSeats = new BookedUserSeatsDTO();
    this.bookedUserSeats.bookedSeats = new Map<number, string>();
  }

  public setBookedSeatsInformation(roomId: number) {
    this.bookedUserSeats.roomId = roomId;
  }

  public getBookedRoomSeatsDoc(roomId: number, playedMovieId: number, selectedTimeNumber: number) {
    this.bookedRoomSeatsDoc = this.angularFirestore.collection('book/booked_room_seats/rooms')
      .doc(roomId + '').collection('playedMovies')
      .doc(playedMovieId + '').collection('dates')
      .doc(selectedTimeNumber + '');
  }

  public get getBookedRoomSeats(): Observable<TBookedSeatsMap> {
    return this.bookedRoomSeatsDoc.valueChanges().pipe(map((val: IBookedRoomSeats) => {
      return new BookedRoomSeatsDTO().deserialize(val).bookedSeats;
    }));
  }

  public setBookedRoomSeats(bookedSeats: TBookedSeatsMap) {
    this.bookedRoomSeatsDoc.update({booked_seats: Array
        .from(bookedSeats.entries())
        .map((el) => {
          return {
            key: el[0],
            value: el[1]
          };
        })
    });
  }

  public getBookedUserSeats() {

  }

  public saveBookedUserSeats(bookedSeats: BookedUserSeatsDTO) {

  }

  public setBookedUserSeats(seatId: number) {
    this.bookedUserSeats.bookedSeats.set(seatId, null);
  }

  public deleteBookedUserSeats(seatId: number) {
    this.bookedUserSeats.bookedSeats.delete(seatId);
  }

}
