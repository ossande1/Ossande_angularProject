import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notefour } from './notefour';

describe('Notefour', () => {
  let component: Notefour;
  let fixture: ComponentFixture<Notefour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notefour],
    }).compileComponents();

    fixture = TestBed.createComponent(Notefour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
