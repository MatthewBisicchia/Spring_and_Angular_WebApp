import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAndSSNFormatterComponent } from './phone-and-ssnformatter.component';

describe('PhoneAndSSNFormatterComponent', () => {
  let component: PhoneAndSSNFormatterComponent;
  let fixture: ComponentFixture<PhoneAndSSNFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneAndSSNFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneAndSSNFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
