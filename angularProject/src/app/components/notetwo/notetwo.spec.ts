import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notetwo } from './notetwo';

describe('Notetwo', () => {
  let component: Notetwo;
  let fixture: ComponentFixture<Notetwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notetwo],
    }).compileComponents();

    fixture = TestBed.createComponent(Notetwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
