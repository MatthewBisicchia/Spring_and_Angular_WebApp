import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickGenResultComponent } from './quick-gen-result.component';

describe('QuickGenResultComponent', () => {
  let component: QuickGenResultComponent;
  let fixture: ComponentFixture<QuickGenResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickGenResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickGenResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
