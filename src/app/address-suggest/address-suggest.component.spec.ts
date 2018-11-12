import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSuggestComponent } from './address-suggest.component';

describe('AddressSuggestComponent', () => {
  let component: AddressSuggestComponent;
  let fixture: ComponentFixture<AddressSuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
