import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualItemComponent } from './individual-item.component';

describe('IndividualItemComponent', () => {
  let component: IndividualItemComponent;
  let fixture: ComponentFixture<IndividualItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
