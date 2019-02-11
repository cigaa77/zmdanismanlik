import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonetmeliklerComponent } from './yonetmelikler.component';

describe('YonetmeliklerComponent', () => {
  let component: YonetmeliklerComponent;
  let fixture: ComponentFixture<YonetmeliklerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonetmeliklerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonetmeliklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
