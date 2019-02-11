import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZararlilarComponent } from './zararlilar.component';

describe('ZararlilarComponent', () => {
  let component: ZararlilarComponent;
  let fixture: ComponentFixture<ZararlilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZararlilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZararlilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
