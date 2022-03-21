import { TestBed } from '@angular/core/testing';

import { ProveedoresGuard } from './proveedores.guard';

describe('ProveedoresGuard', () => {
  let guard: ProveedoresGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProveedoresGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
