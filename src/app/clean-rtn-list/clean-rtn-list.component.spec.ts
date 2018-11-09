import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanRtnListComponent } from './clean-rtn-list.component';

describe('CleanRtnListComponent', () => {
  let component: CleanRtnListComponent;
  let fixture: ComponentFixture<CleanRtnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanRtnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanRtnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
