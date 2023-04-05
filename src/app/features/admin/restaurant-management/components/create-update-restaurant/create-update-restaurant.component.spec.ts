import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateRestaurantComponent } from './create-update-restaurant.component';

describe('CreateUpdateRestaurantComponent', () => {
  let component: CreateUpdateRestaurantComponent;
  let fixture: ComponentFixture<CreateUpdateRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
