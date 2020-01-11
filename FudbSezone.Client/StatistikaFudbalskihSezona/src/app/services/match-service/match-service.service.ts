import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from 'src/app/models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  apiURL: string = 'http://localhost:5000/api/';

  constructor(private _httpClient: HttpClient) { }

  public returnAllMatches(): Observable<Match[]>
  {
    return this._httpClient.get<Match[]>(`${this.apiURL}Match/`);
  }

  public returnMatchWithID(id: number): Observable<Match>
  {
    return this._httpClient.get<Match>(`${this.apiURL}Match/${id}`);
  }

  public deleteMatch(id: number)
  {
    return this._httpClient.delete(`${this.apiURL}Match/${id}`);
  }

  public addMatch(match: Match): Observable<Match>
  {
    return this._httpClient.post<Match>(`${this.apiURL}Match/`, match);
  }

  public updateMatch(match: Match)
  {
    return this._httpClient.put(`${this.apiURL}Match/`, match);
  }
}
