import { TestBed } from '@angular/core/testing';

import { ProcedureDataService } from './procedure-data.service';

describe('ProcedureDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcedureDataService = TestBed.get(ProcedureDataService);
    expect(service).toBeTruthy();
  });
});
