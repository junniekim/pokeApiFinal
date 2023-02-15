import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBerryComponent } from './individual-berry.component';

describe('IndividualBerryComponent', () => {
  let component: IndividualBerryComponent;
  let fixture: ComponentFixture<IndividualBerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualBerryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualBerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
