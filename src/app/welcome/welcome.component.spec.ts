import { ComponentFixture, TestBed } from '@angular/core/testing';

import { welcomecomponent } from './welcome.component';

describe('welcomecomponent', () => {
  let component: welcomecomponent;
  let fixture: ComponentFixture<welcomecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ welcomecomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(welcomecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
