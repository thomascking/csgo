import { TestBed } from '@angular/core/testing';

import { HltvService } from './hltv.service';

describe('HltvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HltvService = TestBed.get(HltvService);
    expect(service).toBeTruthy();
  });
});
