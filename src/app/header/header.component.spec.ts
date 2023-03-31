import { ComponentFixture, TestBed } from '@angular/core/testing';

import { headercomponent } from './header.component';

describe('HeaderComponent', () => {
  let component: headercomponent;
  let fixture: ComponentFixture<headercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ headercomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(headercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
