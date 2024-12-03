import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullheightDisplayComponent } from './fullheight-display.component';

describe('FullheightDisplayComponent', () => {
  let component: FullheightDisplayComponent;
  let fixture: ComponentFixture<FullheightDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullheightDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullheightDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
