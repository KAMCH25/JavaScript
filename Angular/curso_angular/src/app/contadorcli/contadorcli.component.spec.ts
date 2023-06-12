import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorcliComponent } from './contadorcli.component';

describe('ContadorcliComponent', () => {
  let component: ContadorcliComponent;
  let fixture: ComponentFixture<ContadorcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorcliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
