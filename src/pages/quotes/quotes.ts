import {Component, OnInit} from "@angular/core";
import {NavParams, AlertController} from "ionic-angular";
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navParams: NavParams, private alertCrtl: AlertController) {
  }

  // with OnInit LifeCycle
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCrtl.create({
      title: 'Add Quotes',
      message: 'Are you sure?',
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('Ok');
          console.log(selectedQuote)
        }
      },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled')
          }
        }]
    });

    alert.present();
  }

  // with Elvis Operator (?)
  // ionViewDidLoad() {
  // this.quoteGroup = this.navParams.data;
  // }

}
