import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDeliveryMansComponent } from './preview-delivery-mans.component';

describe('PreviewDeliveryMansComponent', () => {
  let component: PreviewDeliveryMansComponent;
  let fixture: ComponentFixture<PreviewDeliveryMansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDeliveryMansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDeliveryMansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
