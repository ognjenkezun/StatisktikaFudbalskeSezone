import { Component, OnInit } from '@angular/core';
import { FootballMatch } from 'src/app/models/FootballMatch';
import { FootballMatchServiceService } from 'src/app/services/football-match-service/football-match-service.service';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table-matches.component.html',
  styleUrls: ['./table-matches.component.css']
})
export class TableMatchesComponent implements OnInit {

  public listOfFootballMatches: FootballMatch[] = [];

  constructor(private _footballMatchServiceService: FootballMatchServiceService) { }

  ngOnInit() {
    this._footballMatchServiceService.returnAllFootballMatches().subscribe(data => {
      this.listOfFootballMatches = data;
    });
  }
}
