export class Quote {    
    upvote: number;
    donwvote:number
    constructor(public id: number, public authorName: string, public submittedBy: string, public dateCreated: Date){
        this.upvote = 0
        this.donwvote = 0
    }
}
