import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddShoppingItemPage } from '../pages/add-shopping-item/add-shopping-item';


import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from '../firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { shoppingService } from '../services/shopping.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddShoppingItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddShoppingItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    shoppingService
  ]
})
export class AppModule {}
