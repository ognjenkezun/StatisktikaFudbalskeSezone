import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FootballMatch } from 'src/app/models/FootballMatch';

@Injectable({
  providedIn: 'root'
})
export class FootballMatchServiceService {

  apiURL: string = 'http://localhost:5000/api/';

  constructor(private _httpClient: HttpClient) { }

  public returnAllFootballMatches(): Observable<FootballMatch[]>
  {
    return this._httpClient.get<FootballMatch[]>(`${this.apiURL}FootballMatch/`);
  }

  public returnFootballMatchWithID(id: number): Observable<FootballMatch>
  {
    return this._httpClient.get<FootballMatch>(`${this.apiURL}FootballMatch/${id}`);
  }

  public deleteFootballMatch(id: number)
  {
    return this._httpClient.delete(`${this.apiURL}FootballMatch/${id}`);
  }

  public addFootballMatch(footballMatch: FootballMatch): Observable<FootballMatch>
  {
    return this._httpClient.post<FootballMatch>(`${this.apiURL}FootballMatch/`, footballMatch);
  }

  public updateFootballMatch(footballMatch: FootballMatch)
  {
    return this._httpClient.put(`${this.apiURL}FootballMatch/`, footballMatch);
  }
}
