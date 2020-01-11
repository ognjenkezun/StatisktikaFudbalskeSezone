import { TestBed } from '@angular/core/testing';

import { SeasonServiceService } from './season-service.service';

describe('SeasonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonServiceService = TestBed.get(SeasonServiceService);
    expect(service).toBeTruthy();
  });
});
