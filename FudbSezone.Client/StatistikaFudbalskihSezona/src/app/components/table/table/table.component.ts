import { Component, OnInit, Input } from '@angular/core';
import { FootballTeam } from 'src/app/models/FootballTeam';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';
import { Season } from 'src/app/models/Season';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() childSelectedSeason = {} as Season;

  public listOfFootballTeams: FootballTeam[] = [];

  constructor(private _footballTeamService: FootballTeamServiceService)
  { 

  }

  ngOnInit() {
    this._footballTeamService.returnAllFootballTeams().subscribe(data => {
      this.listOfFootballTeams = data;
      this.listOfFootballTeams.sort((a, b) => (a.numberOfPoints > b.numberOfPoints) ? -1 : 1);
    });
  }
}
