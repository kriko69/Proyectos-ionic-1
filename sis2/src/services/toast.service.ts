import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';



@Injectable()
export class ToastService{
    constructor(private toast:ToastController)
    {

    }

    show(mensaje:string)
    {
        return this.toast.create({
            message: mensaje,
            duration:3000
        }).present();
    }
}