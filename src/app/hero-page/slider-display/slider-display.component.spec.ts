import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDisplayComponent } from './slider-display.component';

describe('SliderDisplayComponent', () => {
  let component: SliderDisplayComponent;
  let fixture: ComponentFixture<SliderDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
