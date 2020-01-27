import { Injectable } from '@angular/core';
import { BookedRoomSeatsDTO, BookedUserSeatsDTO, IBookedRoomSeats, IBookedUserSeats, TBookedSeatsMap } from '../../models';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { catchError, filter, first, map } from 'rxjs/operators';
import { AsyncSubject, Observable, ReplaySubject, Subscription, throwError } from 'rxjs';

/** collection: book -> document: booked_room_seats -> collection: rooms -> collection: playedMovies -> collection: dates -> collection: booked_seats -> document: key: string, value: string [string, string][]
 *                                                                                                                                                    -> ...
 *
 *                   -> document: booked-user-seats -> collection: users -> document: key: string, value: string [string, string][]
 *                                                                                                   -> ...
 *
 */

@Injectable()
export class BookedSeatsService {
  private bookedRoomSeatsDoc: AngularFirestoreDocument<IBookedRoomSeats>;
  private bookedRoomSeats$: ReplaySubject<TBookedSeatsMap> = new ReplaySubject<TBookedSeatsMap>(1);
  private set nextBookedRoomSeats(val: TBookedSeatsMap) {
    this.bookedRoomSeats$.next(val);
  }
  public get obsBookedRoomSeats(): Observable<TBookedSeatsMap> {
    return this.bookedRoomSeats$.asObservable();
  }
  private mockBookedSeatsChangeInterval: number;

  private bookedUserSeatsDoc: AngularFirestoreDocument<IBookedUserSeats>;
  private bookedUserSeats$: ReplaySubject<TBookedSeatsMap> = new ReplaySubject<TBookedSeatsMap>(1);
  private set nextBookedUserSeats(val: TBookedSeatsMap) {
    this.bookedUserSeats$.next(val);
  }
  public get obsBookedUserSeats(): Observable<TBookedSeatsMap> {
    return this.bookedUserSeats$.asObservable();
  }

  private bookedUserSeatsLocal$: ReplaySubject<TBookedSeatsMap> = new ReplaySubject<TBookedSeatsMap>(1);
  public set nextBookedUserSeatsLocal(val: TBookedSeatsMap) {
    this.bookedUserSeatsLocal$.next(val);
  }
  public get obsBookedUserSeatsLocal(): Observable<TBookedSeatsMap> {
    return this.bookedUserSeatsLocal$.asObservable();
  }

  private sub: Subscription = new Subscription();

  constructor(
    private angularFirestore: AngularFirestore
  ) {}

  public getBookedRoomSeatsDoc(roomId: number, playedMovieId: number, selectedTimeNumber: number) {
    this.bookedRoomSeatsDoc = this.angularFirestore.collection('book/booked_room_seats/rooms')
      .doc(roomId + '').collection('playedMovies')
      .doc(playedMovieId + '').collection('dates')
      .doc(selectedTimeNumber + '');
    this.listenerBookedRoomSeatsValueChanges();

    // this.mockBookedSeatsChange();
  }

  private listenerBookedRoomSeatsValueChanges() {
    this.sub.add(this.bookedRoomSeatsDoc.valueChanges().pipe(
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

      console.log('listenerBookedRoomSeatsValueChanges', val.bookedSeats);
    }));
  }

  public getBookedUserSeatsDoc(
    roomId: number,
    playedMovieId: number,
    selectedTimeNumber: number,
    bookedSeats: Map<number, string> = new Map<number, string>()
  ): Observable<string> {
    const createdId: string = this.angularFirestore.createId();
    this.bookedUserSeatsDoc = this.angularFirestore.collection('book/booked-user-seats/users').doc(createdId);

    const bookedUserSeats: BookedUserSeatsDTO = new BookedUserSeatsDTO();
    bookedUserSeats.id = createdId;
    bookedUserSeats.roomId = roomId;
    bookedUserSeats.playedMovieId = playedMovieId;
    bookedUserSeats.selectedTimeNumber = selectedTimeNumber;
    bookedUserSeats.bookedSeats = bookedSeats;
    bookedUserSeats.email = null;
    bookedUserSeats.firstName = null;
    bookedUserSeats.lastName = null;
    bookedUserSeats.tel = null;

    const observer: AsyncSubject<string> = new AsyncSubject<string>();
    this.bookedUserSeatsDoc.set(BookedUserSeatsDTO.serialize(bookedUserSeats))
      .then(() => {
        if (bookedSeats.size > 0) {
          this.updateBookedRoomSeats(bookedSeats);
        }
        observer.next(createdId);
        observer.complete();
        // console.log('setBooedUserSeats', createdId);
        // this.listenerBookedUserSeatsValueChanges();
      })
      .catch((error) => {
        console.log(this.bookedUserSeatsDoc.ref.path, error);
      });
    return observer;
  }

  private listenerBookedUserSeatsValueChanges() {
    this.sub.add(this.bookedUserSeatsDoc.valueChanges().pipe(
      map((response: IBookedUserSeats) => {
        return new BookedUserSeatsDTO().deserialize(response);
      }),
      catchError(error => {
        console.log(this.bookedUserSeatsDoc.ref.path, error);
        return throwError(error);
      })
    ).subscribe((val) => {
      this.nextBookedUserSeats = val.bookedSeats;

      console.log('listenerBookedUserSeatsValueChanges', val.bookedSeats);
    }));
  }

  private setBookedRoomSeats(bookedSeats: TBookedSeatsMap) {
    const bookedRoomSeat: BookedRoomSeatsDTO = new BookedRoomSeatsDTO();
    bookedRoomSeat.bookedSeats = bookedSeats;

    this.bookedRoomSeatsDoc.set(BookedRoomSeatsDTO.serialize(bookedRoomSeat));
  }

  public updateBookedRoomSeats(bookedSeats: TBookedSeatsMap) {
    this.obsBookedRoomSeats.pipe(first()).subscribe((val) => {
      bookedSeats.forEach((value, key) => {
        val.set(key, value);
      });

      const bookedRoomSeats: BookedUserSeatsDTO = new BookedUserSeatsDTO();
      bookedRoomSeats.bookedSeats = val;
      this.bookedRoomSeatsDoc.update(BookedRoomSeatsDTO.serialize(bookedRoomSeats));
    });
  }

  public updateBookedUserSeats(bookedSeats: TBookedSeatsMap) {
    this.obsBookedUserSeats.pipe(first()).subscribe((val) => {
      bookedSeats.forEach((value, key) => {
        val.set(key, value);
      });

      const bookedUserSeats: BookedUserSeatsDTO = new BookedUserSeatsDTO();
      bookedUserSeats.bookedSeats = val;
      this.bookedUserSeatsDoc.update(
        {booked_seats: BookedUserSeatsDTO.serialize(bookedUserSeats).booked_seats} as Partial<IBookedUserSeats>
      );
    });
  }

  public updateBookedUserSeatsInformation(email: string, firstName: string, lastName: string, tel: string): Observable<void> {
    const observer: AsyncSubject<void> = new AsyncSubject<void>();
    this.bookedUserSeatsDoc.update(
      {email: email, firstName: firstName, lastName: lastName, tel: tel } as Partial<IBookedUserSeats>
    ).then(() => {
      observer.next();
      observer.complete();
    })
      .catch((error) => {
        console.log(this.bookedUserSeatsDoc.ref.path, error);
      });
    return observer;
  }

  public deletedBookedUserSeats() {
    this.bookedUserSeatsDoc.delete();
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
            val.set(randSeats, '');
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

  public onDestroy() {
    clearInterval(this.mockBookedSeatsChangeInterval);
    this.sub.unsubscribe();
    this.sub = new Subscription();
    this.bookedUserSeatsLocal$ = new ReplaySubject<TBookedSeatsMap>(1);
    this.bookedUserSeats$ = new ReplaySubject<TBookedSeatsMap>(1);
    this.bookedRoomSeats$ = new ReplaySubject<TBookedSeatsMap>(1);
    console.log('mockBookedSeatsChange', 'INTERVAL clear');
  }

}
