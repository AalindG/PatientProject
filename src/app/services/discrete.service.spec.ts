import { TestBed, inject } from '@angular/core/testing';

import { DiscreteService } from './discrete.service';

describe('DiscreteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscreteService]
    });
  });

  it('should be created', inject([DiscreteService], (service: DiscreteService) => {
    expect(service).toBeTruthy();
  }));
});
