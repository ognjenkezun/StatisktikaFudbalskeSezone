import { Component, OnInit } from '@angular/core';
import { SeasonServiceService } from 'src/app/services/season-service/season-service.service';
import { Season } from 'src/app/models/Season';
import { FootballTeam } from 'src/app/models/FootballTeam';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

    public listOfYearsOfSeason: string[] = [];
    public listOfFootballTeams: FootballTeam[] = [];
    public listOfNameFootballTeams: string[] = [];
    public selectedNameOfFootballTeams: string[] = [];
    public listOfAllSeasons: Season[] = [];
    public selectedSeason = {} as Season;
    public season = {} as Season;
    public defaultSelectedSeasonID: number;
    public isSeasonSelected: boolean = true;
    public isCheckedFootballTeam: boolean = false;

    constructor(private _seasonService: SeasonServiceService,
                private _footballTeamService: FootballTeamServiceService) 
    {

    }

    ngOnInit() {

        this.loadAllSeasons();
        this.loadAllFootballTeams();
        this.loadAllSeasonDetails();
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

    public loadAllFootballTeams(): void {
        this._footballTeamService.returnAllFootballTeams().subscribe(data => {
            data.forEach(item => {
                this.listOfNameFootballTeams.push(item.name);
            });
        });
    }

    public loadAllSeasonDetails(): void {
        this._seasonService.returnAllSeasonDetails().subscribe(data => {
        });
    }

    public addNewSeason(): void {
        //checking if the season exists in the database
        let isExist = this.listOfAllSeasons.filter(m => m.yearOfSeason === this.season.yearOfSeason);

        if(isExist.length > 0) {
            alert("Match is already played !!!");
            return;
        }

        if (this.season.yearOfSeason != ""){
            this._seasonService.addSeason(this.season).subscribe(data => {
                this.listOfYearsOfSeason = [];
                this._seasonService.returnAllSeasons().subscribe(data => {
                    data.forEach(item => {
                        this.listOfYearsOfSeason.push(item.yearOfSeason);
                    });
                });
            });
            this.season.yearOfSeason = "";
        }
        else {
            alert("Season already exist or text field is empty");
        }
    }

    public onSelectSeason(): void {
      //Idem u tabelu sezonaFudbalskog tima i onda izlistam koji su igrali te sezone
      //i poredam ih po broju bodova
        this.listOfAllSeasons.forEach(item => {
            if(this.selectedSeason.yearOfSeason == item.yearOfSeason){
                this.selectedSeason.idseason = item.idseason;
            }
        });
        this._footballTeamService.getAllFootballTeamsBySeason(this.selectedSeason.idseason).subscribe(data => {
            this.listOfFootballTeams = data;
            this.listOfFootballTeams.sort((a, b) => (a.numberOfPoints > b.numberOfPoints) ? -1 : 1);
        });
    }
}
