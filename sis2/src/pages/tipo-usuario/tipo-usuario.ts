import { HomePage } from './../home/home';
import { Usuario } from './../../interfaces/usuario.interface';
import { firebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the TipoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { ConductorPage } from './../conductor/conductor';
import { LoginPage } from './../login/login';


import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-tipo-usuario',
  templateUrl: 'tipo-usuario.html',
})
export class TipoUsuarioPage {

  email;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private afAuth:AngularFireAuth, private toast:ToastController, public firebase:firebaseService) {
    this.email=this.navParams.get('email');
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data =>{
      if(data.email && data.uid)
      {
        this.toast.create({
          message:`bienvenido, ${data.email}`,
          duration:3000
        }).present();
      }
    });
  }

  irConductor()
  {
    this.navCtrl.push(ConductorPage);
  }

  logOut()
  {
    this.afAuth.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }


}
