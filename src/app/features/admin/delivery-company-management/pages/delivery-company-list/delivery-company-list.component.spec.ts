import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCompanyListComponent } from './delivery-company-list.component';

describe('CategoryListComponent', () => {
  let component: DeliveryCompanyListComponent;
  let fixture: ComponentFixture<DeliveryCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryCompanyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
