import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollatzComponent } from './collatz.component';

describe('CollatzComponent', () => {
  let component: CollatzComponent;
  let fixture: ComponentFixture<CollatzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollatzComponent]
    });
    fixture = TestBed.createComponent(CollatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
