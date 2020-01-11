import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Season } from 'src/app/models/Season';

@Injectable({
  providedIn: 'root'
})
export class SeasonServiceService {

  apiURL: string = 'http://localhost:5000/api/';

  constructor(private _httpClient: HttpClient) { }

  public returnAllSeasons(): Observable<Season[]>
  {
    return this._httpClient.get<Season[]>(`${this.apiURL}Season/`);
  }

  public returnSeasonWithID(id: number): Observable<Season>
  {
    return this._httpClient.get<Season>(`${this.apiURL}Season/${id}`);
  }

  public deleteSeason(id: number)
  {
    return this._httpClient.delete(`${this.apiURL}Season/${id}`);
  }

  public addSeason(season: Season): Observable<Season>
  {
    return this._httpClient.post<Season>(`${this.apiURL}Season/`, season);
  }

  public updateSeason(season: Season)
  {
    return this._httpClient.put(`${this.apiURL}Season/`, season);
  }
}
