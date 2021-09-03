import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaComercioComponent } from './categoria-comercio.component';

describe('CategoriaComercioComponent', () => {
  let component: CategoriaComercioComponent;
  let fixture: ComponentFixture<CategoriaComercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaComercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
