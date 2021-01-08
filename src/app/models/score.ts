

export class Score {

    public scoreID:number;
    public userID: number;
    public score: number;
    public date: Date;
    constructor(scoreID: number, userID: number, score: number, date: Date) { 
        this.scoreID=scoreID,
        this.userID=userID,
        this.score=score,
        this.date=date
    }

}