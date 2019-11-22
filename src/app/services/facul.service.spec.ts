import { TestBed } from '@angular/core/testing';

import { FaculService } from './facul.service';

describe('FaculService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaculService = TestBed.get(FaculService);
    expect(service).toBeTruthy();
  });
});
