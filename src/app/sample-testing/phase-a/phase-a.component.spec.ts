import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseAComponent } from './phase-a.component';

describe('PhaseAComponent', () => {
  let component: PhaseAComponent;
  let fixture: ComponentFixture<PhaseAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
