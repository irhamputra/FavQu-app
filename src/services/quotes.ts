import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addToFavorite(quote: Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes)
  }

  removeFromFavorite(quote: Quote){
    const position = this.favoriteQuotes.findIndex( (quoteElement: Quote) => {
      return quoteElement.id == quote.id
    });
    this.favoriteQuotes.splice(position, 1)
  }

  getFavorite(){
    return this.favoriteQuotes.slice();
  }
}
