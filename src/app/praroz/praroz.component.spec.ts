import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrarozComponent } from './praroz.component';

describe('PrarozComponent', () => {
  let component: PrarozComponent;
  let fixture: ComponentFixture<PrarozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrarozComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrarozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
