import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';
import{NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public actSheet: ActionSheetController, public toast:ToastController, public nav: NavController){}


  async verToast(){
    let Toast = await this.toast.create({
      message: 'Compartiendo ubicacion',
      duration: 1000,
      position: 'middle'
    
    });
    Toast.present();
  }

  irtab4(){
    this.nav.navigateForward('tab4');
  }
  
  async verActionSheet(){
    const HojaDeAccion=await this.actSheet.create({
      header: 'Configuraciones Avanzadas',
      buttons:[{
        text: 'Compartir Ubicación',
        icon: "navigate",
        handler: ()=>{
          this.verToast();
        }
      },{
        text: 'Ir a Acerca De.',
        icon:"return-right",
        handler :()=>{
          this.irtab4();
        }
      },{
        text: 'Cancelar',
        handler:()=>{
        
        }
      }]
    });
    HojaDeAccion.present();
  }
}
