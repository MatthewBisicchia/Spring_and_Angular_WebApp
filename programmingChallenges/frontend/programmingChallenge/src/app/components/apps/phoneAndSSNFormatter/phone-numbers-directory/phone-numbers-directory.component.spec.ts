import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumbersDirectoryComponent } from './phone-numbers-directory.component';

describe('PhoneNumbersDirectoryComponent', () => {
  let component: PhoneNumbersDirectoryComponent;
  let fixture: ComponentFixture<PhoneNumbersDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumbersDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumbersDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
