
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../interfaces/usuario.interface';
import { Vehiculo } from './../interfaces/vehiculo.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class firebaseService{
    
    private userRef;
    //    private shopingRef = this.db.list<Item>('shopping-list/nuevos');
    data:any;
    todo:any;
    userList$:Observable<any>;    
    constructor(private db:AngularFireDatabase,){
        
    }
    
    /*verKey()
    {
        this.userList$=this.db.list('Usuario').snapshotChanges().map(changes=>{
            return changes.map(c=>({
                key:c.payload.key,
                ...c.payload.val()
            }))
        });
        
        this.db.object('Usuario/usuario-12345678').snapshotChanges().map(action => {
            const $key = action.key;
            const data = { $key, $value: action.payload.val() };
            return data;
        }).subscribe(item => {
            console.log(item.$value);
        });
        console.log(this.todo);
        
        
    }*/
    
    definirUsusarioRef(aux:any)
    {
        this.userRef=this.db.database.ref('Usuario/usuario-'+aux);
    }
    
    getUsuariariosRef()
    {
        return this.userRef;
    }
    
    add(usuario:Usuario)
    {
        return this.userRef.set(usuario);
    }
    
    
    //autos
    private autoRef;

    definirAutoRef(aux:any)
    {
        this.autoRef=this.db.database.ref('Usuario/chris@ucb/Autos/'+aux);
    }

    addAuto(vehiculo:Vehiculo)
    {
        return this.autoRef.set(vehiculo);
    }

    getAutosRef()
    {
        return this.db.list('Usuario/chris@ucb/Autos');
    }

    editarAutos(auto:Vehiculo,placa)
    {
        return this.getAutosRef().update(placa,auto);
    }
    eliminarAutos(placa)
    {
        return this.getAutosRef().remove(placa);
    }

    //solicitudes

    private notificacionRef;
    definirNotificacionRef(aux:any) //nombre de la rama
    {
        this.autoRef=this.db.database.ref('Usuario/kev@ucb/notificacion/'+aux);
    }

    addNotificacion(vehiculo:Vehiculo)
    {
        return this.autoRef.set(vehiculo);
    }

    getNoficacionRef()
    {
        return this.db.list('Usuario/kev@ucb/noficacion');
    }

    eliminarNotificacion(placa)
    {
        return this.getAutosRef().remove(placa);
    }



}