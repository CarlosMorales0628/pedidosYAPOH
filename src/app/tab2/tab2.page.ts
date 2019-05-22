import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertc: AlertController) { }

  combo: any;
  unidades: any;
  precio: any;
  Coca : any;

  async pedido() {

    this.precio = (this.unidades * this.combo);

    const alert = await this.alertc.create({
      header: "Boleta de compra",
      message: "Combo de: $" + this.combo +"<br>"+"Bebida: "+this.Coca +"<br>" +"Cantidad: "+this.unidades+" unidades"+"<br>" + "Valor Total: $" + this.precio+"<br>"+"Gracias por su compra uwu <3",
      buttons: ['Ok']

    });
    alert.present();

  }

}




