import { Component, OnInit } from '@angular/core';
import { FootballTeam } from 'src/app/models/FootballTeam';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';
import { SeasonServiceService } from 'src/app/services/season-service/season-service.service';
import { Season } from 'src/app/models/Season';
import { SeasonOfFootballTeam } from 'src/app/models/SeasonOfFootballTeam';
import { SeasonOfFootballTeamServiceService } from 'src/app/services/season-of-football-team-service/season-of-football-team-service.service';

@Component({
  selector: 'app-football-team',
  templateUrl: './football-team.component.html',
  styleUrls: ['./football-team.component.css']
})
export class FootballTeamComponent implements OnInit {

    public listOfFootballTeams: FootballTeam[] = [];
    public footballTeam = {} as FootballTeam;
    public listOfYearsOfSeason: string[] = [];
    public listOfAllSeasons: Season[] = [];
    public selectedSeason = {} as Season;
    public seasonOfFootballTeam = {} as SeasonOfFootballTeam;
    public fuj: SeasonOfFootballTeam[] = [];

    constructor(private _footballTeamService: FootballTeamServiceService,
                private _seasonService: SeasonServiceService,
                private _seasonOfFootballTeamServiceService: SeasonOfFootballTeamServiceService) 
    {

    }

    ngOnInit() {
        this.loadFootballTeams();
        this.loadAllSeasons();
    }

    public loadAllSeasons(): void {
        this._seasonService.returnAllSeasons().subscribe(data => {
            this.listOfAllSeasons = data;
            data.forEach(item => {
                this.listOfYearsOfSeason.push(item.yearOfSeason);
            });
            this.listOfYearsOfSeason.sort((a, b) => (a > b) ? 1 : -1);
        });
    }

    public loadFootballTeams(): void {
        this._footballTeamService.returnAllFootballTeams().subscribe(data => {
            this.listOfFootballTeams = data;
            this.listOfFootballTeams.sort((a, b) => (a.numberOfPoints > b.numberOfPoints) ? -1 : 1);
        });
    }

    public addNewFootballTeam(): void {

        this._footballTeamService.addFootballTeam(this.footballTeam).subscribe(data => {
            this.loadFootballTeams();
            console.log(data);
        });

        var newFootbalTeamID = (this.listOfFootballTeams[this.listOfFootballTeams.length - 1].idfootballTeam) + 1;

        console.log(newFootbalTeamID);
        this._seasonOfFootballTeamServiceService.
            addSeasonOfFootballTeam({idsezoneFudbalskogTima: this.seasonOfFootballTeam.idsezoneFudbalskogTima,
                                     idseason: this.selectedSeason.idseason,
                                     idfootballTeam: newFootbalTeamID}).subscribe(data => {
                                        console.log(data);
                                     });
    }

    public onSelectSeason(): void {
        this.listOfAllSeasons.forEach(item => {
            if(this.selectedSeason.yearOfSeason == item.yearOfSeason){
                this.selectedSeason.idseason = item.idseason;
            }
        });
    }
}
