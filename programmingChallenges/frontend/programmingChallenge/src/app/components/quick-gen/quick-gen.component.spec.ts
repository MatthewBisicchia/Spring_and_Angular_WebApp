import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickGenComponent } from './quick-gen.component';

describe('QuickGenComponent', () => {
  let component: QuickGenComponent;
  let fixture: ComponentFixture<QuickGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
