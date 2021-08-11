import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../models/item.model';

@Injectable()
export class shoppingService{
    private shopingRef = this.db.list<Item>('shopping-list');
    //    private shopingRef = this.db.list<Item>('shopping-list/nuevos');

    
    constructor(private db:AngularFireDatabase){

    }

    getShoppingList()
    {
        return this.shopingRef;
    }

    addItem(item:Item)
    {
        return this.shopingRef.push(item);
    }
}