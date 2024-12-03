import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextuderComponent } from './image-textuder.component';

describe('ImageTextuderComponent', () => {
  let component: ImageTextuderComponent;
  let fixture: ComponentFixture<ImageTextuderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageTextuderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTextuderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
