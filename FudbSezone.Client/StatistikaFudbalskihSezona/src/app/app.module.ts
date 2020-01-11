import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootballTeamComponent } from './components/football-team/football-team.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { MatchComponent } from './components/match/match/match.component';
import { TableComponent } from './components/table/table/table.component';
import { SeasonComponent } from './components/season/season/season.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableMatchesComponent } from './components/table-matches/table-matches/table-matches.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FootballTeamComponent,
    FooterComponent,
    MatchComponent,
    TableComponent,
    SeasonComponent,
    TableMatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    InputsModule,
    ButtonsModule,
    LabelModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
