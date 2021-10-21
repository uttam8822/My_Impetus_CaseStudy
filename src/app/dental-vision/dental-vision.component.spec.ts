import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalVisionComponent } from './dental-vision.component';

describe('DentalVisionComponent', () => {
  let component: DentalVisionComponent;
  let fixture: ComponentFixture<DentalVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
