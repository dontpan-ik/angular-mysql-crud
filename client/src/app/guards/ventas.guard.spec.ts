import { TestBed } from '@angular/core/testing';

import { VentasGuard } from './ventas.guard';

describe('VentasGuard', () => {
  let guard: VentasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VentasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
