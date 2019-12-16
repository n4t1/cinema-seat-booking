import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { BookModule } from './book/book.module';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TmdbMovieSearchModule } from './tmdb-movie-search/tmdb-movie-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AppRoutingModule,
    BookModule,
    LoginModule,
    MainModule,
    TmdbMovieSearchModule,
    SharedServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
