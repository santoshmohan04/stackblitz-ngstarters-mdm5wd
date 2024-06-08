import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickboxesComponent } from './clickboxes.component';

describe('ClickboxesComponent', () => {
  let component: ClickboxesComponent;
  let fixture: ComponentFixture<ClickboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickboxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
