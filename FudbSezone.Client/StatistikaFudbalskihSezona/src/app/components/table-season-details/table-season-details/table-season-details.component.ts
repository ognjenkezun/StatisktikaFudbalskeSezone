import { Component, OnInit, Input } from '@angular/core';
import { Season } from 'src/app/models/Season';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';
import { FootballTeam } from 'src/app/models/FootballTeam';

@Component({
  selector: 'app-table-season-details',
  templateUrl: './table-season-details.component.html',
  styleUrls: ['./table-season-details.component.css']
})
export class TableSeasonDetailsComponent implements OnInit {

  @Input() childSelectedSeason = {} as Season;

  public listOfFootballTeams: FootballTeam[] = [];

  constructor(private _footballTeamService: FootballTeamServiceService) 
  {

  }

  ngOnInit() {
    this._footballTeamService.getAllFootballTeamsBySeason(this.childSelectedSeason.idseason).subscribe(data => {
      this.listOfFootballTeams = data;
      this.listOfFootballTeams.sort((a, b) => (a.numberOfPoints > b.numberOfPoints) ? -1 : 1);
    });
  }
}
