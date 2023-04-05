import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOwnerListComponent } from './restaurant-owner-list.component';

describe('CategoryListComponent', () => {
  let component: RestaurantOwnerListComponent;
  let fixture: ComponentFixture<RestaurantOwnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantOwnerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
