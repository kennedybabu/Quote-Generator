import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(1, 'babu', 'lets run with the tigers', 'whoseNana', new Date(2021, 3, 14)),
    new Quote(2, 'wolver254', 'Never underestimate the allureness of darkness', 'bananaGuy', new Date),
    new Quote(3, 'flossyCArter', 'Peeping out of my carriage, above the skies lies our true ancestral land', 'astro', new Date),
 ]

 toggleDetails(index:number){
   this.quotes[index].showDetails = !this.quotes[index].showDetails
 }

 addNewQuote(quote:any){
   let quoteLength = this.quotes.length
   quote.id = quoteLength +1
   quote.dateCreated = new Date(quote.dateCreated)
   this.quotes.push(quote)

 }

 deleteQuote(toDelete:boolean, index:number){
   if(toDelete){
     let trashQuote = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

     if(trashQuote){
      this.quotes.splice(index, 1)
     }
   }
 }
  constructor() { }

  ngOnInit(): void {
  }

}
