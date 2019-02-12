import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YanMenuComponent } from './yan-menu.component';

describe('YanMenuComponent', () => {
  let component: YanMenuComponent;
  let fixture: ComponentFixture<YanMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YanMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
