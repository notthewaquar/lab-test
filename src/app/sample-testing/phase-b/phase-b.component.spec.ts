import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseBComponent } from './phase-b.component';

describe('PhaseBComponent', () => {
  let component: PhaseBComponent;
  let fixture: ComponentFixture<PhaseBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
