import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateSpecialityComponent } from './create-update-speciality.component';

describe('CreateUpdateSpecialityComponent', () => {
  let component: CreateUpdateSpecialityComponent;
  let fixture: ComponentFixture<CreateUpdateSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateSpecialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
