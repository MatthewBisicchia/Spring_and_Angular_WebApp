import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvToAddressBookComponent } from './csv-to-address-book.component';

describe('CsvToAddressBookComponent', () => {
  let component: CsvToAddressBookComponent;
  let fixture: ComponentFixture<CsvToAddressBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvToAddressBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvToAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
