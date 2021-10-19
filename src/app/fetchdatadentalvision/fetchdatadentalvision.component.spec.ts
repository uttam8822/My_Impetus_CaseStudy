import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchdatadentalvisionComponent } from './fetchdatadentalvision.component';

describe('FetchdatadentalvisionComponent', () => {
  let component: FetchdatadentalvisionComponent;
  let fixture: ComponentFixture<FetchdatadentalvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchdatadentalvisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchdatadentalvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
