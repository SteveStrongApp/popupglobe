import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardDetailComponent } from './big-card-detail.component';

describe('BigCardDetailComponent', () => {
  let component: BigCardDetailComponent;
  let fixture: ComponentFixture<BigCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
