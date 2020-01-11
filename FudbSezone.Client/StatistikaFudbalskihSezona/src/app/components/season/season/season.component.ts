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
  public listOfFootballTeams: string[] = [];
  public isSeasonSelected: boolean = true;

  constructor(private _seasonService: SeasonServiceService, private _footballTeamService: FootballTeamServiceService) { }

  ngOnInit() {
    this._seasonService.returnAllSeasons().subscribe(data => {
      data.forEach(item => {
        this.listOfYearsOfSeason.push(item.yearOfSeason);
      });
    });

    this._footballTeamService.returnAllFootballTeams().subscribe(data => {
      data.forEach(item => {
        this.listOfFootballTeams.push(item.name);
      })
    });
  }
}
