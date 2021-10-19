import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchdatadentalComponent } from './fetchdatadental.component';

describe('FetchdatadentalComponent', () => {
  let component: FetchdatadentalComponent;
  let fixture: ComponentFixture<FetchdatadentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchdatadentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchdatadentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
