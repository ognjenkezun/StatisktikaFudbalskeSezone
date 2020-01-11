import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballTeamComponent } from './components/football-team/football-team.component';
import { SeasonComponent } from './components/season/season/season.component';
import { MatchComponent } from './components/match/match/match.component';

const routes: Routes = [
  { path: '', redirectTo: '/sezona', pathMatch: 'full' },
  { path: 'sezona', component: SeasonComponent  },
  { path: 'utakmica', component: MatchComponent },
  { path: 'fudbalskiKlubovi', component:  FootballTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
