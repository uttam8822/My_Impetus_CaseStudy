import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwhomeComponent } from './uwhome.component';

describe('UwhomeComponent', () => {
  let component: UwhomeComponent;
  let fixture: ComponentFixture<UwhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
