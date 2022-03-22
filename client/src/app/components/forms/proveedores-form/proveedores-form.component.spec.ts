import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresFormComponent } from './proveedores-form.component';

describe('ProveedoresFormComponent', () => {
  let component: ProveedoresFormComponent;
  let fixture: ComponentFixture<ProveedoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
