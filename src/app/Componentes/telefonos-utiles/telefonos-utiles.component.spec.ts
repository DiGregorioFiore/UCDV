import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonosUtilesComponent } from './telefonos-utiles.component';

describe('TelefonosUtilesComponent', () => {
  let component: TelefonosUtilesComponent;
  let fixture: ComponentFixture<TelefonosUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefonosUtilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonosUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
