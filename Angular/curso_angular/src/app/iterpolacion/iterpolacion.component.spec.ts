import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterpolacionComponent } from './iterpolacion.component';

describe('IterpolacionComponent', () => {
  let component: IterpolacionComponent;
  let fixture: ComponentFixture<IterpolacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IterpolacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IterpolacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
