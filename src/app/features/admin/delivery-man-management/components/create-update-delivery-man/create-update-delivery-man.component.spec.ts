import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDeliveryManComponent } from './create-update-delivery-man.component';

describe('CreateUpdateDeliveryManComponent', () => {
  let component: CreateUpdateDeliveryManComponent;
  let fixture: ComponentFixture<CreateUpdateDeliveryManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDeliveryManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDeliveryManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
