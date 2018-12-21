import { TestBed } from '@angular/core/testing';

import { FirebaseWorkspaceService } from './firebase-workspace.service';

describe('FirebaseWorkspaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseWorkspaceService = TestBed.get(FirebaseWorkspaceService);
    expect(service).toBeTruthy();
  });
});
