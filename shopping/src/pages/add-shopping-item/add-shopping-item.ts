import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { shoppingService } from '../../services/shopping.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item:Item={
    name:'',
    quantity: 0,
    price: 0
  };3+3333

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:shoppingService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item:Item)
  {
    this.service.addItem(item).then(ref=>{
      console.log("se agrego!");
      
    })
  }
}
