import { TestBed } from '@angular/core/testing';

import { FirebaseDriverService } from './firebase-driver.service';

describe('FirebaseDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseDriverService = TestBed.get(FirebaseDriverService);
    expect(service).toBeTruthy();
  });
});
