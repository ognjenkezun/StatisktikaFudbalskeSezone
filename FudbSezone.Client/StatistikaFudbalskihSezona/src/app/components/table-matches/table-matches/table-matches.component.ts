import { Component, OnInit } from '@angular/core';
import { MatchServiceService } from 'src/app/services/match-service/match-service.service';
import { Match } from 'src/app/models/Match';

@Component({
  selector: 'app-table-matches',
  templateUrl: './table-matches.component.html',
  styleUrls: ['./table-matches.component.css']
})
export class TableMatchesComponent implements OnInit {

  public listOfMatches: Match[] = [];

  constructor(private _atchServiceService: MatchServiceService) { }

  ngOnInit() {
    this._atchServiceService.returnAllMatches().subscribe(data => {
      this.listOfMatches = data;
    });
  }
}
