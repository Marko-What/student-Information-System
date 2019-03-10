import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyStudentoverviewComponent } from './lazy-studentoverview.component';

describe('LazyStudentoverviewComponent', () => {
  let component: LazyStudentoverviewComponent;
  let fixture: ComponentFixture<LazyStudentoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyStudentoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyStudentoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
