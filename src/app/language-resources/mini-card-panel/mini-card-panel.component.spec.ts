import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardPanelComponent } from './mini-card-panel.component';

describe('MiniCardPanelComponent', () => {
  let component: MiniCardPanelComponent;
  let fixture: ComponentFixture<MiniCardPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCardPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
