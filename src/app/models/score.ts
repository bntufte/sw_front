import { User } from "./user";

export class Score {

    // constructor(public scoreID: number, public userID: number, public score: number, public date: Date) { }

    constructor(public score: number, public date: Date, public scoreUser: User) { }

}