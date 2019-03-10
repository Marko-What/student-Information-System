import { TestBed } from '@angular/core/testing';

import { StudentSystemServiceService } from './student-system-service.service';

describe('StudentSystemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentSystemServiceService = TestBed.get(StudentSystemServiceService);
    expect(service).toBeTruthy();
  });
});
