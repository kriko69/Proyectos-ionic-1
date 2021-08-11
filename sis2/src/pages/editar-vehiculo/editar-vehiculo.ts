import { VehiculoPage } from './../vehiculo/vehiculo';
import { Vehiculo } from './../../interfaces/vehiculo.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { firebaseService } from '../../services/firebase.service';
import { ToastService } from '../../services/toast.service';

/**
 * Generated class for the EditarVehiculoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-vehiculo',
  templateUrl: 'editar-vehiculo.html',
})
export class EditarVehiculoPage {

  auto:Vehiculo;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public servicio:firebaseService, public toast:ToastService) {
    this.auto=this.navParams.get('auto');
    console.log(this.auto);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarVehiculoPage');
  }

  actualizar()
  {
    this.servicio.definirAutoRef(this.auto.placa);
    this.servicio.editarAutos(this.auto,this.auto.placa).then(
      ()=>{
        this.toast.show(` Vehiculo ${this.auto.marca} ${this.auto.placa} actualizado!`);
        this.navCtrl.setRoot(VehiculoPage);
      }
    );
  }

  eliminar()
  {
    this.servicio.eliminarAutos(this.auto.placa).then(
      ()=>{
        this.toast.show(` Vehiculo ${this.auto.marca} ${this.auto.placa} eliminado!`);
        this.navCtrl.setRoot(VehiculoPage);
      }
    );
  }
}
