import { ComponentFixture, TestBed } from '@angular/core/testing';

import { questioncomponent } from './question.component';

describe('questionComponent', () => {
  let component: questioncomponent;
  let fixture: ComponentFixture<questioncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ questioncomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(questioncomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
