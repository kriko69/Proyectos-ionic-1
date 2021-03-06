import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../interfaces/usuario.interface';
import { firebaseService } from '../../services/firebase.service';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  data:Usuario={
    califconduc:0,
    califpasa:0,
    carnet:0,
    correo:'',
    id:0,
    nombre:'',
    apellido:'',
    pass1:'',
    tipo:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio:firebaseService
  ,public alerta:AlertController,private afAauth:AngularFireAuth) {
  }

  /*ionViewDidLoad(){
    this.servicio.getId();
  }*/

  registrar(data:Usuario)
  {
    console.log(data);
    this.servicio.definirUsusarioRef(this.data.carnet); //defino nombre de rama
    this.servicio.add(data).then(ref=>{ //agrego
      //si se tiene exito
      this.registrarAuth();
      this.mostrarAlerta(); //alerta
      this.navCtrl.push(LoginPage); //redirigir login
    })
    
    
  }
  
  async registrarAuth()
  {
    try {
      const resultado = await this.afAauth.auth.createUserWithEmailAndPassword(this.data.correo,this.data.pass1);
      console.log(resultado);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  mostrarAlerta() {
    const alert = this.alerta.create({
      title: 'Registrado exitoso!',
      subTitle: 'Ahora ya puedes ingresar a la aplicacion',
      buttons: ['OK']
    });
    alert.present();
  }

}
