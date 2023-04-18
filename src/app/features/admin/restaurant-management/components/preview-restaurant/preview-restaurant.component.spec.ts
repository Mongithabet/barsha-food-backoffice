import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewRestaurantComponent } from './preview-restaurant.component';

describe('UpdatePreviewRestaurantComponent', () => {
  let component: PreviewRestaurantComponent;
  let fixture: ComponentFixture<PreviewRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
