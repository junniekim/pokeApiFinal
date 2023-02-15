import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryComponent } from './berry.component';

describe('BerryComponent', () => {
  let component: BerryComponent;
  let fixture: ComponentFixture<BerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
