import { TestBed } from '@angular/core/testing';

import { FirebaseUserService } from './firebase-user.service';

describe('FirebaseUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUserService = TestBed.get(FirebaseUserService);
    expect(service).toBeTruthy();
  });
});
