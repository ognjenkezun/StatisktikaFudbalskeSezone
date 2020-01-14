import { Component, OnInit } from '@angular/core';
import { FootballTeam } from 'src/app/models/FootballTeam';
import { FootballTeamServiceService } from 'src/app/services/football-team-service/football-team-service.service';

@Component({
  selector: 'app-football-team',
  templateUrl: './football-team.component.html',
  styleUrls: ['./football-team.component.css']
})
export class FootballTeamComponent implements OnInit {

  public listOfFootballTeams: FootballTeam[] = [];
  public footballTeam = {} as FootballTeam;

  constructor(private _footballTeamService: FootballTeamServiceService) { }

  ngOnInit() {
    this.loadFootballTeams();
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
    });
  }
}
