import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeGridsComponent } from './three-grids.component';

describe('ThreeGridsComponent', () => {
  let component: ThreeGridsComponent;
  let fixture: ComponentFixture<ThreeGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeGridsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
