import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperDisplayComponent } from './swiper-display.component';

describe('SwiperDisplayComponent', () => {
  let component: SwiperDisplayComponent;
  let fixture: ComponentFixture<SwiperDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
