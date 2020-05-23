import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindAssignComponent } from './data-bind-assign.component';

describe('DataBindAssignComponent', () => {
  let component: DataBindAssignComponent;
  let fixture: ComponentFixture<DataBindAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
