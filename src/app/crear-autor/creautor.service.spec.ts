import { TestBed } from '@angular/core/testing';

import { CreautorService } from './creautor.service';

describe('CreautorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreautorService = TestBed.get(CreautorService);
    expect(service).toBeTruthy();
  });
});
