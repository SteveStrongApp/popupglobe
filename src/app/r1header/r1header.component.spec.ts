import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R1headerComponent } from './r1header.component';

describe('R1headerComponent', () => {
  let component: R1headerComponent;
  let fixture: ComponentFixture<R1headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R1headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R1headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
