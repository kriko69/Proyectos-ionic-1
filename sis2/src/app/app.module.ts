import { EditarVehiculoPage } from './../pages/editar-vehiculo/editar-vehiculo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrarPage } from '../pages/registrar/registrar';
import { TipoUsuarioPage } from '../pages/tipo-usuario/tipo-usuario';
import { ConductorPage } from './../pages/conductor/conductor';
import { VehiculoPage } from './../pages/vehiculo/vehiculo';
import { PerfilPage } from './../pages/perfil/perfil';
import { AgregarVehiculosPage } from './../pages/agregar-vehiculos/agregar-vehiculos';



import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentians';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseService } from '../services/firebase.service';
import { ToastService } from '../services/toast.service';

import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TipoUsuarioPage,
    ConductorPage,
    VehiculoPage,
    PerfilPage,
    AgregarVehiculosPage,
    EditarVehiculoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    TipoUsuarioPage,
    ConductorPage,
    VehiculoPage,
    PerfilPage,
    AgregarVehiculosPage,
    EditarVehiculoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    firebaseService, //servicio
    ToastService
  ]
})
export class AppModule {}
