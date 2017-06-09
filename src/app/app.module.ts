import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DatabaseService } from '../services/database.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBRopcu7MdQWI8Kq3oqOrUyLr9mcZp_1L8",
  authDomain: "anime-was-a-mistake-3ceb0.firebaseapp.com",
  databaseURL: "https://anime-was-a-mistake-3ceb0.firebaseio.com",
  projectId: "anime-was-a-mistake-3ceb0",
  storageBucket: "anime-was-a-mistake-3ceb0.appspot.com",
  messagingSenderId: "718852410241"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    DatabaseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
