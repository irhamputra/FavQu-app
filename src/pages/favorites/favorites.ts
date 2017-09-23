import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {ModalController} from "ionic-angular";
import {QuotePage} from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quoteService: QuotesService, private modalCtrl: ModalController){}

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavorite();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove){
        this.quoteService.removeFromFavorite(quote);

        // #1 simple reload page after unfavorite
        // this.quotes = this.quoteService.getFavorite();

        // #2 Advance reload page after unfavorite
        const position = this.quotes.findIndex((quoteElement: Quote) => {
          return quoteElement.id == quote.id
        });
        this.quotes.splice(position, 1);
      }
    });
  }
}
