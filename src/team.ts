import {Player} from "./player";
import { PlayerConfig } from "./player-config";
import {TeamConfig} from "./team-config";

export class Team extends Player{
    totalScore:number;
    playerList:Array<Player>;
    playFinishFlag:number;

    constructor(teamData:TeamConfig,playerData:PlayerConfig){
        super(playerData);
        this.totalScore=0;
        this.playerList=teamData.playerListVal;
        this.playFinishFlag=0;
    }

    static playBall(min:number, max:number) {
        let num=Math.floor(Math.random() * (max - min + 1) ) + min;
        if(num===3||num===5){return num+1;}
        return num;
    }

    startPlay(){
            let obj=new Player({scoreArray:[]});
            for(let j=0;j<6;j++){
                let run=String(Team.playBall(0,6));
                obj.score?.push(run);
                obj.totalRuns+=+run;
                this.totalScore+=Number(run);
                if(run==='0'){break;}
            }
            this.playerList.push(obj);
            
    }


}