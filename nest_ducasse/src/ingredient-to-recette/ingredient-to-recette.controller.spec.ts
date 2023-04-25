import { Test, TestingModule } from '@nestjs/testing';
import { IngredientToRecetteController } from './ingredient-to-recette.controller';
import { IngredientToRecetteService } from './ingredient-to-recette.service';

describe('IngredientToRecetteController', () => {
  let controller: IngredientToRecetteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientToRecetteController],
      providers: [IngredientToRecetteService],
    }).compile();

    controller = module.get<IngredientToRecetteController>(IngredientToRecetteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
