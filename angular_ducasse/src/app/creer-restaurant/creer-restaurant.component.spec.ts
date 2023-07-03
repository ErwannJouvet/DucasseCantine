import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerRestaurantComponent } from './creer-restaurant.component';

describe('CreerRestaurantComponent', () => {
  let component: CreerRestaurantComponent;
  let fixture: ComponentFixture<CreerRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
