import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPokemonComponent } from './individual-pokemon.component';

describe('IndividualPokemonComponent', () => {
  let component: IndividualPokemonComponent;
  let fixture: ComponentFixture<IndividualPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
