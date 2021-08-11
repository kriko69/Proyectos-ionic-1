import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, LoadingController} from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { login } from '../../interfaces/login.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { TipoUsuarioPage } from '../tipo-usuario/tipo-usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= {} as login;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private afAuth:AngularFireAuth, public alerta:AlertController,
  public pla:Platform, public load:LoadingController) {
    
  }

  /*ionViewDidLoad() {
    this.pla.ready().then(()=>{
      
      this.afAuth.authState.subscribe(session=>{
        if(session){
          this.navCtrl.setRoot(TipoUsuarioPage);
      }
        else{
          this.navCtrl.setRoot(LoginPage);
        }
      });
    });
  }*/

  irRegistro()
  {
    this.navCtrl.push(RegistrarPage);
  }

  async ingresar(user:login)
  {
    this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(
      () => {
        this.presentLoading();
        setTimeout(()=>{
          this.navCtrl.setRoot(TipoUsuarioPage,{email:this.user.email});
        },3000);
      },
      error => {
        this.presentLoading();
        setTimeout(()=>{
          this.mostrarAlerta();
          this.navCtrl.push(LoginPage);
        },3000);
      }
    );;

  }

  presentLoading() {
    const loader = this.load.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  mostrarAlerta() {
    const alert = this.alerta.create({
      title: 'Datos incorrectos!',
      subTitle: 'Existe algun dato incorrecto por favor intente de nuevo.',
      buttons: ['OK']
    });
    alert.present();
  }


}
