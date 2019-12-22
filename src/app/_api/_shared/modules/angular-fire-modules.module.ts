import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

const modules = [
  // AngularFireAuthModule,
  // AngularFireDatabaseModule,
  // AngularFireFunctionsModule,
  AngularFirestoreModule,
  // AngularFireStorageModule,
  // AngularFireMessagingModule
];

@NgModule({
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class AngularFireModulesModule { }
