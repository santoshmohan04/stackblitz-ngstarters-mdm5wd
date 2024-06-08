import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { CounterService } from './counter.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let counterServiceSub: Partial<CounterService> = {
    add: () => null,
    get: () => 1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      providers: [{ provide: CounterService, useValue: counterServiceSub }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('total should be one', () => {
    component.total = 0;
    component.add();
    expect(component.total).toEqual(1);
  });

  it('should display total 1', () => {
    expect(component.total).toEqual(1);
  });
});
