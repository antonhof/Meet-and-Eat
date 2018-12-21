import { TestBed } from '@angular/core/testing';

import { FirebaseRestaurantService } from './firebase-restaurant.service';

describe('FirebaseRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseRestaurantService = TestBed.get(FirebaseRestaurantService);
    expect(service).toBeTruthy();
  });
});
