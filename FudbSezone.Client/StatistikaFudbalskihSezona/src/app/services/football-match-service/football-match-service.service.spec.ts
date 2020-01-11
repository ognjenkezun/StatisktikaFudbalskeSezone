import { TestBed } from '@angular/core/testing';

import { FootballMatchServiceService } from './football-match-service.service';

describe('FootballMatchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballMatchServiceService = TestBed.get(FootballMatchServiceService);
    expect(service).toBeTruthy();
  });
});
