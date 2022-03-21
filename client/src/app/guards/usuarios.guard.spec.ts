import { TestBed } from '@angular/core/testing';

import { UsuariosGuard } from './usuarios.guard';

describe('UsuariosGuard', () => {
  let guard: UsuariosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuariosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
