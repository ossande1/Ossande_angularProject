import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noteone } from './noteone';

describe('Noteone', () => {
  let component: Noteone;
  let fixture: ComponentFixture<Noteone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noteone],
    }).compileComponents();

    fixture = TestBed.createComponent(Noteone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
