import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctPage } from './prouct.page';

describe('ProuctPage', () => {
  let component: ProuctPage;
  let fixture: ComponentFixture<ProuctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuctPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
