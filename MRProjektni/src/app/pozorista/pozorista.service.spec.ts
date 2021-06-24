import { TestBed } from '@angular/core/testing';

import { PozoristaService } from './pozorista.service';

describe('PozoristaService', () => {
  let service: PozoristaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PozoristaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
