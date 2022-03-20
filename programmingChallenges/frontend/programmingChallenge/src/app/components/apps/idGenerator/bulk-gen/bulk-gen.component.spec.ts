import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkGenComponent } from './bulk-gen.component';

describe('BulkGenComponent', () => {
  let component: BulkGenComponent;
  let fixture: ComponentFixture<BulkGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
