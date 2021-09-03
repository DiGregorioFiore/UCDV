import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComercioComponent } from './detalle-comercio.component';

describe('DetalleComercioComponent', () => {
  let component: DetalleComercioComponent;
  let fixture: ComponentFixture<DetalleComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleComercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
