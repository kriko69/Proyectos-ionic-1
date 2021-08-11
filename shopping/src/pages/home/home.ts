import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddShoppingItemPage } from '../add-shopping-item/add-shopping-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mover(){
    this.navCtrl.push(AddShoppingItemPage);
  }

}
