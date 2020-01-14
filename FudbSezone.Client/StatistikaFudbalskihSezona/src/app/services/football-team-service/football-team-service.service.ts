import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FootballTeam } from 'src/app/models/FootballTeam';

@Injectable({
  providedIn: 'root'
})
export class FootballTeamServiceService {

  apiURL: string = 'http://localhost:5000/api/';

  constructor(private _httpClient: HttpClient) { }

  public returnAllFootballTeams(): Observable<FootballTeam[]>
  {
    return this._httpClient.get<FootballTeam[]>(`${this.apiURL}FootballTeam/`);
  }

  public getAllFootballTeamsBySeason(id: number): Observable<FootballTeam[]>
  {
    return this._httpClient.get<FootballTeam[]>(`${this.apiURL}FootballTeam/TableBySeason/${id}`);
  }

  public returnFootballTeamWithID(id: number): Observable<FootballTeam>
  {
    return this._httpClient.get<FootballTeam>(`${this.apiURL}FootballTeam/${id}`);
  }

  public deleteFootballTeam(id: number)
  {
    return this._httpClient.delete(`${this.apiURL}FootballTeam/${id}`);
  }

  public addFootballTeam(footballTeam: FootballTeam): Observable<FootballTeam>
  {
    return this._httpClient.post<FootballTeam>(`${this.apiURL}FootballTeam/`, footballTeam);
  }

  public updateFootballTeam(footballTeam: FootballTeam, id: number)
  {
    return this._httpClient.put(`${this.apiURL}FootballTeam/${id}`, footballTeam);
  }
}
