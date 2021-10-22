import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeServiceUserDetailsComponent } from './life-service-user-details.component';

describe('LifeServiceUserDetailsComponent', () => {
  let component: LifeServiceUserDetailsComponent;
  let fixture: ComponentFixture<LifeServiceUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeServiceUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeServiceUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
