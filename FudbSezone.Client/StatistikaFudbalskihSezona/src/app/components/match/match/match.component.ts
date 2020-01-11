import { Component, OnInit } from '@angular/core';
import { FootballMatch } from 'src/app/models/FootballMatch';
import { FootballMatchServiceService } from 'src/app/services/football-match-service/football-match-service.service';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public ListOfFootballMatches: FootballMatch[] = [];
  public listOfFootballTeams: string[] = [];
  public showAllMatches: boolean = true;

  constructor(private _footballMatchService: FootballMatchServiceService, private _footballTeamService: FootballTeamServiceService) { }

  ngOnInit() {
    this._footballMatchService.returnAllFootballMatches().subscribe(data => {
      this.ListOfFootballMatches = data;
    });

    this._footballTeamService.returnAllFootballTeams().subscribe(data => {
      data.forEach(item => {
        this.listOfFootballTeams.push(item.name);
      });
    });
  }
}
