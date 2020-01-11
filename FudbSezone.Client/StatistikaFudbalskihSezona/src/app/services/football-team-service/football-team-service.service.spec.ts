import { TestBed } from '@angular/core/testing';

import { FootballTeamServiceService } from './football-team-service.service';

describe('FootballTeamServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballTeamServiceService = TestBed.get(FootballTeamServiceService);
    expect(service).toBeTruthy();
  });
});
