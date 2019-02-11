import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgelerimizComponent } from './belgelerimiz.component';

describe('BelgelerimizComponent', () => {
  let component: BelgelerimizComponent;
  let fixture: ComponentFixture<BelgelerimizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelgelerimizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgelerimizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
