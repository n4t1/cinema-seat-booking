import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { BookModule } from './book/book.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TmdbMovieSearchModule } from './tmdb-movie-search/tmdb-movie-search.module';

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { SharedServicesModule } from '@api/shared';

registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AppRoutingModule,
    BookModule,
    LoginModule,
    MainModule,
    TmdbMovieSearchModule,
    SharedServicesModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl' }
  ]
})
export class AppModule {
}
