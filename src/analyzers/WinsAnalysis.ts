import { Analyzer } from "../Summary";
import {MatchResult} from '../MatchResult';
import { MatchData } from "../MatchData";

 export class WinsAnalysis implements Analyzer {
    constructor(public team: string){}

    run(matches: MatchData[]): string {
        let wins = 0;

        for(let match of matches) {
            if(match[1] === 'Man United' && match[5] === MatchResult.homeWin){
                wins++;
            }else if(match[2] === 'Man United' && match[5] === MatchResult.awayWin){
                wins++;
            }
        }

        return `Team ${this.team} won ${wins} games`;
    }
 }