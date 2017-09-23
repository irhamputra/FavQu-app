import {Component, OnInit} from "@angular/core";
import {NavParams, AlertController} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navParams: NavParams,
              private alertCrtl: AlertController,
              private quotesService: QuotesService) {
  }

  // with OnInit LifeCycle
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCrtl.create({
      title: 'Add Quotes',
      message: 'Are you sure do you want to favorite this quote?',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.quotesService.addToFavorite(selectedQuote)
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
