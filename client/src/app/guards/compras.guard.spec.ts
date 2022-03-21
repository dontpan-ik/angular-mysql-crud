import { TestBed } from '@angular/core/testing';

import { ComprasGuard } from './compras.guard';

describe('ComprasGuard', () => {
  let guard: ComprasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ComprasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
