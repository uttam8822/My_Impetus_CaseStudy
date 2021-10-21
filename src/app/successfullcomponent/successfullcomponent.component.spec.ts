import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullcomponentComponent } from './successfullcomponent.component';

describe('SuccessfullcomponentComponent', () => {
  let component: SuccessfullcomponentComponent;
  let fixture: ComponentFixture<SuccessfullcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
