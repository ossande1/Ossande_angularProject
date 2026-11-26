import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notethree } from './notethree';

describe('Notethree', () => {
  let component: Notethree;
  let fixture: ComponentFixture<Notethree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notethree],
    }).compileComponents();

    fixture = TestBed.createComponent(Notethree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
