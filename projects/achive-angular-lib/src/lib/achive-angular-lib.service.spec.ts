import { TestBed } from '@angular/core/testing';

import { AchiveAngularLibService } from './achive-angular-lib.service';

describe('AchiveAngularLibService', () => {
  let service: AchiveAngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchiveAngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
