export class Quote {    
    upvote: number;
    downvote:number
    constructor(public id: number, public authorName: string, public quote:string, public submittedBy: string, public dateCreated: Date){
        this.upvote = 0
        this.downvote = 0
    }
}
