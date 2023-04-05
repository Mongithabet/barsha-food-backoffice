import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateRestaurantOwnerComponent } from './create-update-restaurant-owner.component';

describe('CreateUpdateRestaurantOwnerComponent', () => {
  let component: CreateUpdateRestaurantOwnerComponent;
  let fixture: ComponentFixture<CreateUpdateRestaurantOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateRestaurantOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateRestaurantOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
