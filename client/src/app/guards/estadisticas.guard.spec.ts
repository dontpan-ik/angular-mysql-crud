import { TestBed } from '@angular/core/testing';

import { EstadisticasGuard } from './estadisticas.guard';

describe('EstadisticasGuard', () => {
  let guard: EstadisticasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstadisticasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
