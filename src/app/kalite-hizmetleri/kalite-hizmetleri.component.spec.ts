import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaliteHizmetleriComponent } from './kalite-hizmetleri.component';

describe('KaliteHizmetleriComponent', () => {
  let component: KaliteHizmetleriComponent;
  let fixture: ComponentFixture<KaliteHizmetleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaliteHizmetleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaliteHizmetleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
