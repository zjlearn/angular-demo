import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCleanComponent } from './address-clean.component';

describe('AddressCleanComponent', () => {
  let component: AddressCleanComponent;
  let fixture: ComponentFixture<AddressCleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressCleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
