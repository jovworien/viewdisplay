import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourInoneComponent } from './four-inone.component';

describe('FourInoneComponent', () => {
  let component: FourInoneComponent;
  let fixture: ComponentFixture<FourInoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourInoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourInoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
