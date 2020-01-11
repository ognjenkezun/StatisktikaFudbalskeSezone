import { TestBed } from '@angular/core/testing';

import { SeasonOfFootballTeamServiceService } from './season-of-football-team-service.service';

describe('SeasonOfFootballTeamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonOfFootballTeamServiceService = TestBed.get(SeasonOfFootballTeamServiceService);
    expect(service).toBeTruthy();
  });
});
