import { Component } from '@angular/core';
import {ViewController, NavParams, AlertController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(public viewCtrl: ViewController,
              private navParams: NavParams,
              private alertCtrl: AlertController) {}

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onCloseModal (){
    this.viewCtrl.dismiss()
  }

  onClose(remove = false){
    const alert = this.alertCtrl.create({
      title: 'Unfavorite Quotes',
      message: 'Are you sure want to unfavorite your quote?',
      buttons: [{
        text: 'Remove it',
        handler: () => {
          this.viewCtrl.dismiss(remove);
          console.log(remove)
        }
      },
        {
          text:'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!')
          }
        }]
    });
    alert.present();
  }
}
