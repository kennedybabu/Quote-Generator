import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    new Quote(1, 'Carl Sagan', 'Extinction is the rule. Survival is the exception', 'bananaGuy', new Date(2021, 3, 14)),
    new Quote(2, 'George Carlin', 'If its true that our species is alone in the universe, then Id have to say the universe aimed rather low and settled for very little.', 'Charlie Brown', new Date(2020, 10, 10)),
    new Quote(3, 'Dylan Thomas', 'Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light.', 'bigFoot', new Date),
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
     let trashQuote = confirm(`Are you sure you want to delete '${this.quotes[index].quote}' quote?`) 

     if(trashQuote){
      this.quotes.splice(index, 1)
     }
   }
 }

 upvoteQuote(index:number){
   this.quotes[index].upvote +=1

   let upvotes =[]
   for(let quote of this.quotes){
     upvotes.push(quote.upvote)
    //  console.log(upvotes)

     let mostLiked = upvotes[0]
    //  console.log(mostLiked)

     function indexOfMax(arr:any){
     
       let max = arr[0]
       let maxIndex = 0

       for (let i = 0; i < arr.length; i ++){
         if(arr[i] > max){
           maxIndex = i
           max = arr[i]

         }
       }
       console.log(maxIndex)
       return maxIndex

     }

     indexOfMax(upvotes)

   }
 }

 downvoteQuote(index:number){
  this.quotes[index].downvote +=1
}
  constructor() { }

  ngOnInit(): void {
  }

}
