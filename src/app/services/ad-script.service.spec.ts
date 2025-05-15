import { TestBed } from '@angular/core/testing';

import { AdScriptService } from './ad-script.service';

describe('AdScriptService', () => {
  let service: AdScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
