import { TestBed } from '@angular/core/testing';

import { questionservice } from './question.service';

describe('questionservice', () => {
  let service: questionservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(questionservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
