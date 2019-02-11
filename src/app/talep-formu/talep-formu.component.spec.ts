import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalepFormuComponent } from './talep-formu.component';

describe('TalepFormuComponent', () => {
  let component: TalepFormuComponent;
  let fixture: ComponentFixture<TalepFormuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalepFormuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalepFormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
