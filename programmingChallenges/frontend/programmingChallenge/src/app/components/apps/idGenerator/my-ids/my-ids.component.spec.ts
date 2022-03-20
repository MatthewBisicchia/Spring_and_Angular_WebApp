import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIDsComponent } from './my-ids.component';

describe('MyIDsComponent', () => {
  let component: MyIDsComponent;
  let fixture: ComponentFixture<MyIDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIDsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
