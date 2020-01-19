import { Injectable } from '@angular/core';
import { BookedRoomSeatsDTO, BookedUserSeatsDTO, IBookedRoomSeats, TBookedSeatsMap } from '../../models';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { catchError, filter, first, map } from 'rxjs/operators';
import { Observable, ReplaySubject, throwError } from 'rxjs';

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
  private bookedRoomSeats$: ReplaySubject<TBookedSeatsMap>;

  private mockBookedSeatsChangeInterval: number;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.bookedUserSeats = new BookedUserSeatsDTO();
    this.bookedUserSeats.bookedSeats = new Map<number, string>();

    this.bookedRoomSeats$ = new ReplaySubject<TBookedSeatsMap>(1);
  }

  public setBookedSeatsInformation(roomId: number) {
    this.bookedUserSeats.roomId = roomId;
  }

  public getBookedRoomSeatsDoc(roomId: number, playedMovieId: number, selectedTimeNumber: number) {
    this.bookedRoomSeatsDoc = this.angularFirestore.collection('book/booked_room_seats/rooms')
      .doc(roomId + '').collection('playedMovies')
      .doc(playedMovieId + '').collection('dates')
      .doc(selectedTimeNumber + '');
    this.listenerBookedRoomSeatsValueChanges();

    // this.mockBookedSeatsChange();
  }

  private listenerBookedRoomSeatsValueChanges() {
    this.bookedRoomSeatsDoc.valueChanges().pipe(
      filter((response: IBookedRoomSeats) => {
        if (response == undefined || Object.keys(response).length === 0) {
          this.setBookedRoomSeats(new Map<number, string>());
          return false;
        }
        return true;
      }),
      map((response: IBookedRoomSeats) => {
        return new BookedRoomSeatsDTO().deserialize(response);
      }),
      catchError(error => {
        console.log(this.bookedRoomSeatsDoc.ref.path, error);
        return throwError(error);
      })
    ).subscribe((val) => {
      this.nextBookedRoomSeats = val.bookedSeats;

      console.log('listenerBookedRoomSeatsValueChanges', val.bookedSeats );
    });
  }

  private set nextBookedRoomSeats(val: TBookedSeatsMap) {
    this.bookedRoomSeats$.next(val);
  }

  public get obsBookedRoomSeats(): Observable<TBookedSeatsMap> {
    return this.bookedRoomSeats$.asObservable();
  }

  private setBookedRoomSeats(bookedSeats: TBookedSeatsMap) {
    this.bookedRoomSeatsDoc.set(this.createBookedRoomSeatsObj(bookedSeats));
  }

  public updateBookedRoomSeats(bookedSeats: TBookedSeatsMap) {
    this.bookedRoomSeatsDoc.update(this.createBookedRoomSeatsObj(bookedSeats));
  }

  private createBookedRoomSeatsObj(bookedSeats: TBookedSeatsMap): IBookedRoomSeats {
    return {
      booked_seats: Array
        .from(bookedSeats.entries())
        .map((el) => {
          return {
            key: el[0],
            value: el[1]
          };
        })
    };
  }

  private mockBookedSeatsChange() {
    console.log('mockBookedSeatsChange', 'INTERVAL started');

    this.mockBookedSeatsChangeInterval = setInterval(() => {
      console.log('mockBookedSeatsChange', 'INTERVAL called');

      this.obsBookedRoomSeats.pipe(first()).subscribe((val) => {
        console.log('mockBookedSeatsChange', 'INTERVAL sub');

        for (let i = 0; i < 5; ++i) {
          const randSetOrDelete: number = Math.floor(Math.random() * (1 - 0 + 1) + 0);
          const randSeats: number = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
          if (randSetOrDelete) {
            val.set(randSeats, 'mockUserId22');
          } else {
            if (val.has(randSeats)) {
              val.delete(randSeats);
            }
          }

          console.log('mockBookedSeatsChange', randSetOrDelete, randSeats);
        }

        this.updateBookedRoomSeats(val);
      });
    }, 3000);
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

  public onDestroy() {
    clearInterval(this.mockBookedSeatsChangeInterval);
    console.log('mockBookedSeatsChange', 'INTERVAL clear');
  }

}
