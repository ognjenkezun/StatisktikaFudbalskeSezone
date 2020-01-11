import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeasonOfFootballTeam } from 'src/app/models/SeasonOfFootballTeam';

@Injectable({
  providedIn: 'root'
})
export class SeasonOfFootballTeamServiceService {

  apiURL: string = 'http://localhost:5000/api/';

  constructor(private _httpClient: HttpClient) { }

  public returnAllSeasonsOfFootballTeam(): Observable<SeasonOfFootballTeam[]>
  {
    return this._httpClient.get<SeasonOfFootballTeam[]>(`${this.apiURL}SeasonOfFootballTeam/`);
  }

  public returnSeasonOfFootballTeamWithID(id: number): Observable<SeasonOfFootballTeam>
  {
    return this._httpClient.get<SeasonOfFootballTeam>(`${this.apiURL}SeasonOfFootballTeam/${id}`);
  }

  public deleteSeasonOfFootballTeam(id: number)
  {
    return this._httpClient.delete(`${this.apiURL}SeasonOfFootballTeam/${id}`);
  }

  public addSeasonOfFootballTeam(seasonOfFootballTeam: SeasonOfFootballTeam): Observable<SeasonOfFootballTeam>
  {
    return this._httpClient.post<SeasonOfFootballTeam>(`${this.apiURL}SeasonOfFootballTeam/`, seasonOfFootballTeam);
  }

  public updateSeasonOfFootballTeam(seasonOfFootballTeam: SeasonOfFootballTeam)
  {
    return this._httpClient.put(`${this.apiURL}SeasonOfFootballTeam/`, seasonOfFootballTeam);
  }
}
