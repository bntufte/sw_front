import { User } from "./user";

export class Score {

    // constructor(public scoreID: number, public userID: number, public score: number, public date: Date) { }

    constructor(public scoreID: number, public score: number, public generation: Date, public scoreUserId: number) { }

}