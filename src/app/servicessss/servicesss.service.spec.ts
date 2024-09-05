import { TestBed } from '@angular/core/testing';

import { ServicesssService } from './servicesss.service';

describe('ServicesssService', () => {
  let service: ServicesssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
