import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchdatalifeComponent } from './fetchdatalife.component';

describe('FetchdatalifeComponent', () => {
  let component: FetchdatalifeComponent;
  let fixture: ComponentFixture<FetchdatalifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchdatalifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchdatalifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
