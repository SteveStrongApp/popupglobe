import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsForceSearchComponent } from './tabs-force-search.component';

describe('TabsForceSearchComponent', () => {
  let component: TabsForceSearchComponent;
  let fixture: ComponentFixture<TabsForceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsForceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsForceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
