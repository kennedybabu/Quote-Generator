import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(1, 'babu', 'lets run with the tigers', 'me', new Date),
    new Quote(2, 'babu', 'lets run with the tigers', 'me', new Date),
    new Quote(3, 'babu', 'lets run with the tigers', 'me', new Date),
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
