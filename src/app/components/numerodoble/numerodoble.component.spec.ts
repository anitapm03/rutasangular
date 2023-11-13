import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerodobleComponent } from './numerodoble.component';

describe('NumerodobleComponent', () => {
  let component: NumerodobleComponent;
  let fixture: ComponentFixture<NumerodobleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumerodobleComponent]
    });
    fixture = TestBed.createComponent(NumerodobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
