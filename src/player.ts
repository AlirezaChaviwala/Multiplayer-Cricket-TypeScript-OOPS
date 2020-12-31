import {PlayerConfig} from "./player-config";

export class Player{
    score:Array<string>;
    totalRuns:number=0;

    constructor(playerData:PlayerConfig){
        this.score=playerData.scoreArray;
    }

}