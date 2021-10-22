import { TestBed } from '@angular/core/testing';

import { ConfirmDiaBoxService } from './confirm-dia-box.service';

describe('ConfirmDiaBoxService', () => {
  let service: ConfirmDiaBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmDiaBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
