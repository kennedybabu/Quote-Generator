import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {


  quotes: Quote[] = [
    {id: 1, authorName: 'babu', quote: 'lets run with the tigers', submittedBy: 'me', dateCreated: new Date, upvote: 0, downvote:0},
    {id: 1, authorName: 'babu', quote: 'lets run with the tigers', submittedBy: 'me', dateCreated: new Date, upvote: 0, downvote:0},
    {id: 1, authorName: 'babu', quote: 'lets run with the tigers', submittedBy: 'me', dateCreated: new Date, upvote: 0, downvote:0}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
