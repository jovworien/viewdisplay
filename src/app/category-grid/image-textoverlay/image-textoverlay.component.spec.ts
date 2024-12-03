import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextoverlayComponent } from './image-textoverlay.component';

describe('ImageTextoverlayComponent', () => {
  let component: ImageTextoverlayComponent;
  let fixture: ComponentFixture<ImageTextoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTextoverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
