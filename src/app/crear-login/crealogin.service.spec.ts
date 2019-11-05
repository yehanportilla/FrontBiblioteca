import { TestBed } from '@angular/core/testing';

import { CrealoginService } from './crealogin.service';

describe('CrealoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrealoginService = TestBed.get(CrealoginService);
    expect(service).toBeTruthy();
  });
});
