import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RruleComponent } from './rrule.component';

describe('RruleComponent', () => {
  let component: RruleComponent;
  let fixture: ComponentFixture<RruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
