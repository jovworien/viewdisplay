import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAmtpriceComponent } from './img-amtprice.component';

describe('ImgAmtpriceComponent', () => {
  let component: ImgAmtpriceComponent;
  let fixture: ComponentFixture<ImgAmtpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgAmtpriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAmtpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
