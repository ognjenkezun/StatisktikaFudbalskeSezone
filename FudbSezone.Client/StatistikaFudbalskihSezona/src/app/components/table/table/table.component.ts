import { Component, OnInit } from '@angular/core';
import { FootballTeam } from 'src/app/models/FootballTeam';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public listOfFootballTeams: FootballTeam[] = [];

  constructor(private _footballTeamService: FootballTeamServiceService) { }

  ngOnInit() {
    this._footballTeamService.returnAllFootballTeams().subscribe(data => {
      this.listOfFootballTeams = data;
      this.listOfFootballTeams.sort((a, b) => (a.numberOfPoints > b.numberOfPoints) ? -1 : 1);
    });
  }
}
