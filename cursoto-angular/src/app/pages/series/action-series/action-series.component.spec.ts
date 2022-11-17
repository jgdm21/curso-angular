import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSeriesComponent } from './action-series.component';

describe('ActionSeriesComponent', () => {
  let component: ActionSeriesComponent;
  let fixture: ComponentFixture<ActionSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
