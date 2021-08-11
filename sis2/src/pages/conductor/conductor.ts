import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { PerfilPage } from '../perfil/perfil';
import { VehiculoPage } from '../vehiculo/vehiculo';


@IonicPage()
@Component({
  selector: 'page-conductor',
  templateUrl: 'conductor.html',
})
export class ConductorPage {
  
  tab1:any;
  tab2:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = PerfilPage;
    this.tab2 = VehiculoPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConductorPage');
  }

}
