import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAmtnamestarbtnComponent } from './img-amtnamestarbtn.component';

describe('ImgAmtnamestarbtnComponent', () => {
  let component: ImgAmtnamestarbtnComponent;
  let fixture: ComponentFixture<ImgAmtnamestarbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgAmtnamestarbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgAmtnamestarbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
