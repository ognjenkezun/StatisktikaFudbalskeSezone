import { Component, OnInit } from '@angular/core';
import { FootballMatch } from 'src/app/models/FootballMatch';
import { FootballMatchServiceService } from 'src/app/services/football-match-service/football-match-service.service';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';
import { FootballTeam } from 'src/app/models/FootballTeam';
import { MatchServiceService } from 'src/app/services/match-service/match-service.service';
import { Match } from 'src/app/models/Match';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

    public listOfFootballMatches = [new FootballMatch()];
    public footballMatch = {} as FootballMatch;
    public match = {} as Match;
    public listOfFootballTeams = {} as string[];
    public listOfHomeFootballTeams = [] as string[];
    public listOfAwayFootballTeams = [] as string[];
    public listOfAllFootballTeams: FootballTeam[] = null;
    public listOfAllMatches = {} as Match[];
    public homeFoodballTeam = {} as FootballTeam;
    public awayFoodballTeam = {} as FootballTeam;
    public numberOfGoalsHomeTeam: string;
    public numberOfGoalsAwayTeam: string;
    public selectedHomeTeamID: number;
    public selectedAwayTeamID: number;
    public selectedHomeTeam: string;
    public selectedAwayTeam: string;
    public showTableOfMatches: boolean = false;
    public showTableOfTeams: boolean = false;

    constructor(private _footballMatchService: FootballMatchServiceService,
                private _footballTeamService: FootballTeamServiceService,
                private _matchService: MatchServiceService) { }

    ngOnInit() {

        this.refreshListOfAllFootballTeams();
        this.refreshListOfAllMatches();
        this.loadAllFootballTeams();
    }

    public loadAllFootballMatches(): void {
        this._footballMatchService.returnAllFootballMatches().subscribe(data => {
            this.listOfFootballMatches = data;
        });
    }

    public loadAllFootballTeams(): void {
        this._footballTeamService.returnAllFootballTeams().subscribe(data => {
            data.forEach(item => {
                this.listOfHomeFootballTeams.push(item.name);
                this.listOfAwayFootballTeams.push(item.name);
            });
        });
    }

    public refreshListOfAllMatches(): void {
        this._matchService.returnAllMatches().subscribe(data => {
            this.listOfAllMatches = data;
          });
    }

    public refreshListOfAllFootballTeams(): void {
        this._footballTeamService.returnAllFootballTeams().subscribe(data => {
            this.listOfAllFootballTeams = data;
            this.listOfAllFootballTeams.sort((a, b) => (a.numberOfPoints > b.numberOfPoints) ? -1 : 1);
        });
    }

    public addMatchInTable(): void {
        this._matchService.addMatch(this.match).subscribe(data => {
            this.refreshListOfAllFootballTeams();
            this.refreshListOfAllMatches();
        });
    }

    //ADD - POST on database new match
    public addMatch(): void {
        this.refreshListOfAllMatches();

        this.match.homeTeam = this.selectedHomeTeam;
        this.match.awayTeam = this.selectedAwayTeam;
        this.match.resultOfMatch = this.match.numberOfGoalsHomeTeam + ":" + this.match.numberOfGoalsAwayTeam;

        let isAlreadyPlayedHome = this.listOfAllMatches.filter(m => m.homeTeam === this.match.homeTeam);
        let isAlreadyPlayedAway = isAlreadyPlayedHome ? isAlreadyPlayedHome.filter(m => m.awayTeam === this.match.awayTeam) : [];
        
        if(isAlreadyPlayedAway.length > 0) {
            alert("Match is already played !!!");
            return;
        }

        if(Number(this.match.numberOfGoalsHomeTeam) > Number(this.match.numberOfGoalsAwayTeam)){
            //Home winner + 3 points
            //this.selectedHomeTeam.numberOfPoints += 3;
            this._footballTeamService.returnFootballTeamWithID(this.selectedHomeTeamID).subscribe(data => {
                this.homeFoodballTeam = data;

                this.homeFoodballTeam.numberOfPoints = this.homeFoodballTeam.numberOfPoints + 3;

                //UPDATE - PUT number of goals selected home team with ID
                this._footballTeamService.updateFootballTeam(this.homeFoodballTeam, this.homeFoodballTeam.idfootballTeam).subscribe(data => {
                    this.refreshListOfAllFootballTeams();
                    this.refreshListOfAllMatches();
                });
            });
            this.addMatchInTable();
        }
        else if(Number(this.match.numberOfGoalsHomeTeam) < Number(this.match.numberOfGoalsAwayTeam)){
            //Away winner + 3 points
            //this.selectedAwayTeam.numberOfPoints += 3;
            this._footballTeamService.returnFootballTeamWithID(this.selectedAwayTeamID).subscribe(data => {
                this.awayFoodballTeam = data;

                this.awayFoodballTeam.numberOfPoints = this.awayFoodballTeam.numberOfPoints + 3;

                //UPDATE - PUT number of goals selected home team with ID
                this._footballTeamService.updateFootballTeam(this.awayFoodballTeam, this.awayFoodballTeam.idfootballTeam).subscribe(data => {
                    this.refreshListOfAllFootballTeams();
                    this.refreshListOfAllMatches();
                });
            });
            this.addMatchInTable();
        }
        else if(Number(this.match.numberOfGoalsHomeTeam) == Number(this.match.numberOfGoalsAwayTeam)){
            //Draw bot teams + 1 point
            //this.selectedHomeTeam.numberOfPoints ++;
            this._footballTeamService.returnFootballTeamWithID(this.selectedHomeTeamID).subscribe(data => {
                this.homeFoodballTeam = data;

                this.homeFoodballTeam.numberOfPoints = this.homeFoodballTeam.numberOfPoints + 1;
                //UPDATE - PUT number of goals selected home team with ID
                this._footballTeamService.updateFootballTeam(this.homeFoodballTeam, this.homeFoodballTeam.idfootballTeam).subscribe(data => {
                    this.refreshListOfAllFootballTeams();
                    this.refreshListOfAllMatches();
                });
            });

            //this.selectedAwayTeam.numberOfPoints ++;
            this._footballTeamService.returnFootballTeamWithID(this.selectedAwayTeamID).subscribe(data => {
                this.awayFoodballTeam = data;

                this.awayFoodballTeam.numberOfPoints = this.awayFoodballTeam.numberOfPoints + 1;
            
                //UPDATE - PUT number of goals selected home team with ID
                this._footballTeamService.updateFootballTeam(this.awayFoodballTeam, this.awayFoodballTeam.idfootballTeam).subscribe(data => {
                    this.refreshListOfAllFootballTeams();
                    this.refreshListOfAllMatches();
                });
            });
            this.addMatchInTable();
        }
    }

    public onHomeTeamValueChange(): void {
        this.listOfAllFootballTeams.forEach(item => {
            if(this.selectedHomeTeam == item.name)
            {
                this.selectedHomeTeamID = item.idfootballTeam;
            }
        });
    }

    public onAwayTeamValueChange(): void {
        this.listOfAllFootballTeams.forEach(item => {
            if(this.selectedAwayTeam == item.name)
            {
                this.selectedAwayTeamID = item.idfootballTeam;
            }
        });
    }
}
