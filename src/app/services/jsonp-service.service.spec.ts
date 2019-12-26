import { TestBed } from '@angular/core/testing';

import { JsonpServiceService } from './jsonp-service.service';

describe('JsonpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonpServiceService = TestBed.get(JsonpServiceService);
    expect(service).toBeTruthy();
  });
});
