import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextSliderComponent } from './image-text-slider.component';

describe('ImageTextSliderComponent', () => {
  let component: ImageTextSliderComponent;
  let fixture: ComponentFixture<ImageTextSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTextSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
