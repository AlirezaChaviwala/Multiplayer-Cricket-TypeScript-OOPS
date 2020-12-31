import {Team} from "./team";

let team1=new Team({playerListVal:[]},{scoreArray:[]});
let team2=new Team({playerListVal:[]},{scoreArray:[]});
let onePlayerIndex=1;
let twoPlayerIndex=1;
let ballCount=1;
let clockVal=60;
let manMatchScore=0;
let manMatchIndex=0;
let intervalCheck=false;
let clockTimer:any;


(<HTMLButtonElement>document.getElementById('hit-1')).onclick=()=>{
    
    if(intervalCheck===false){
        intervalCheck=true;
        clockTimer=setInterval(()=>{
            (<HTMLElement>document.getElementById('timer')).innerText=String(--clockVal);
            if(clockVal===0){
                clearInterval(clockTimer);
                (<HTMLButtonElement>document.getElementById('hit-1')).disabled=true;
                (<HTMLButtonElement>document.getElementById('hit-2')).disabled=false;
                clockVal=60;
                intervalCheck=false;
                (<HTMLElement>document.getElementById('timer')).innerText=String(clockVal);
                };
            },1000);
    }
    
    ballCount=1;
    (<HTMLButtonElement>document.getElementById('hit-2')).disabled=true;
    team1.startPlay();

    team1.playerList[team1.playFinishFlag].score?.forEach(element => {
        (<HTMLElement>document.getElementById(`1${String(onePlayerIndex)}${String(ballCount++)}`)).innerText=String(element);
    });
    (<HTMLElement>document.getElementById(`1${String(onePlayerIndex)}7`)).innerText=String(team1.playerList[team1.playFinishFlag].totalRuns);

    (<HTMLElement>document.getElementById('score-1')).innerText=String(team1.totalScore);

    team1.playFinishFlag++;
    onePlayerIndex++;
    if(team1.playFinishFlag===10){
        clearInterval(clockTimer);
        (<HTMLButtonElement>document.getElementById('hit-1')).disabled=true;
        (<HTMLButtonElement>document.getElementById('hit-2')).disabled=false;
        clockVal=60;
        intervalCheck=false;
        team1.playFinishFlag=0;
        (<HTMLElement>document.getElementById('timer')).innerText=String(clockVal);
    }
}

(<HTMLButtonElement>document.getElementById('hit-2')).onclick=()=>{
    
    if(intervalCheck===false){
        intervalCheck=true;
        clockTimer=setInterval(()=>{
            (<HTMLElement>document.getElementById('timer')).innerText=String(--clockVal);
            if(clockVal===0){
                clearInterval(clockTimer);
                (<HTMLButtonElement>document.getElementById('hit-1')).disabled=true;
                (<HTMLButtonElement>document.getElementById('hit-2')).disabled=true;
                (<HTMLButtonElement>document.getElementById('gen-result')).disabled=false;
                clockVal=60;
                intervalCheck=false;
                (<HTMLElement>document.getElementById('timer')).innerText=String(clockVal);
            };
        },1000);
    }
    
    ballCount=1;
    (<HTMLButtonElement>document.getElementById('hit-1')).disabled=true;
    team2.startPlay();

    team2.playerList[team2.playFinishFlag].score?.forEach(element => {
        (<HTMLTableCellElement>document.getElementById(`2${String(twoPlayerIndex)}${String(ballCount++)}`)).innerText=String(element);
    });

    (<HTMLElement>document.getElementById(`2${String(twoPlayerIndex)}7`)).innerText=String(team2.playerList[team2.playFinishFlag].totalRuns);
    (<HTMLElement>document.getElementById('score-2')).innerText=String(team2.totalScore);

    team2.playFinishFlag++;
    twoPlayerIndex++;
    if(team2.playFinishFlag===10){
        clearInterval(clockTimer);
        clockVal=60;
        intervalCheck=false;
        (<HTMLButtonElement>document.getElementById('hit-1')).disabled=true;
        (<HTMLButtonElement>document.getElementById('hit-2')).disabled=true;
        (<HTMLButtonElement>document.getElementById('gen-result')).disabled=false;
    }
}

(<HTMLButtonElement>document.getElementById('gen-result')).onclick=()=>{

    if(team1.totalScore>team2.totalScore){
        (<HTMLElement>document.getElementById('match-won')).innerText=String('TEAM 1');
        for(let i=0;i<team1.playerList.length;i++){
            if(team1.playerList[i].totalRuns>manMatchScore){
                manMatchScore=team1.playerList[i].totalRuns;
                manMatchIndex=i+1;
            }
        }

        (<HTMLElement>document.getElementById('match-man')).innerText=`PLAYER ${manMatchIndex}`;
        (<HTMLElement>document.getElementById('man-team')).innerText=`TEAM 1`;
        (<HTMLElement>document.getElementById('man-score')).innerText=`SCORE: ${manMatchScore}`;
    }
    else if(team1.totalScore<team2.totalScore){
        (<HTMLElement>document.getElementById('match-won')).innerText=String('TEAM 2');
        for(let i=0;i<team2.playerList.length;i++){
            if(team2.playerList[i].totalRuns>manMatchScore){
                manMatchScore=team2.playerList[i].totalRuns;
                manMatchIndex=i+1;
            }
        }
        (<HTMLElement>document.getElementById('match-man')).innerText=`PLAYER ${manMatchIndex}`;
        (<HTMLElement>document.getElementById('man-team')).innerText=`TEAM 2`;
        (<HTMLElement>document.getElementById('man-score')).innerText=`SCORE: ${manMatchScore}`;
    }
    else if(team1.totalScore==team2.totalScore){
        (<HTMLElement>document.getElementById('match-won')).innerText=String('MATCH TIE');
    }
    
}






