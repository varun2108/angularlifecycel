import { TestBed } from '@angular/core/testing';

import { EmployeeServieceService } from './employee-serviece.service';

describe('EmployeeServieceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeServieceService = TestBed.get(EmployeeServieceService);
    expect(service).toBeTruthy();
  });
});
