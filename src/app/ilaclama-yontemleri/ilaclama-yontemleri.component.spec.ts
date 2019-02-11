import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlaclamaYontemleriComponent } from './ilaclama-yontemleri.component';

describe('IlaclamaYontemleriComponent', () => {
  let component: IlaclamaYontemleriComponent;
  let fixture: ComponentFixture<IlaclamaYontemleriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlaclamaYontemleriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlaclamaYontemleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
