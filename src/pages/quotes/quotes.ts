import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon:string};

  constructor(public navParams: NavParams) {
  }

  // with OnInit LifeCycle
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote:string){
    console.log(quote);
  }

  // with Elvis Operator (?)
  // ionViewDidLoad() {
    // this.quoteGroup = this.navParams.data;
  // }

}
