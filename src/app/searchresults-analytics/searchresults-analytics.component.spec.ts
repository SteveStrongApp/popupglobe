import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultsAnalyticsComponent } from './searchresults-analytics.component';

describe('SearchresultsAnalyticsComponent', () => {
  let component: SearchresultsAnalyticsComponent;
  let fixture: ComponentFixture<SearchresultsAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchresultsAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultsAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
