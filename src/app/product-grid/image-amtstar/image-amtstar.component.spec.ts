import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAmtstarComponent } from './image-amtstar.component';

describe('ImageAmtstarComponent', () => {
  let component: ImageAmtstarComponent;
  let fixture: ComponentFixture<ImageAmtstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageAmtstarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAmtstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
