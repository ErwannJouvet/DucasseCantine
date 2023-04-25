import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerIngredientComponent } from './creer-ingredient.component';

describe('CreerIngredientComponent', () => {
  let component: CreerIngredientComponent;
  let fixture: ComponentFixture<CreerIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
