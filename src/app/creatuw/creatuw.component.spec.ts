import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatuwComponent } from './creatuw.component';

describe('CreatuwComponent', () => {
  let component: CreatuwComponent;
  let fixture: ComponentFixture<CreatuwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatuwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatuwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
