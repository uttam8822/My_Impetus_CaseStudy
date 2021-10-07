import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UwloginComponent } from './uwlogin.component';

describe('UwloginComponent', () => {
  let component: UwloginComponent;
  let fixture: ComponentFixture<UwloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UwloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UwloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
