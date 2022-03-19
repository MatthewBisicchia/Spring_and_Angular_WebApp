import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToDashboardBarComponent } from './back-to-dashboard-bar.component';

describe('BackToDashboardBarComponent', () => {
  let component: BackToDashboardBarComponent;
  let fixture: ComponentFixture<BackToDashboardBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToDashboardBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToDashboardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
