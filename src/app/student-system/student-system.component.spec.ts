import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSystemComponent } from './student-system.component';

describe('StudentSystemComponent', () => {
  let component: StudentSystemComponent;
  let fixture: ComponentFixture<StudentSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
