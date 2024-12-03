import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAmtbutonsComponent } from './img-amtbutons.component';

describe('ImgAmtbutonsComponent', () => {
  let component: ImgAmtbutonsComponent;
  let fixture: ComponentFixture<ImgAmtbutonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgAmtbutonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAmtbutonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
