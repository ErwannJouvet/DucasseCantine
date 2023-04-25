import { Test, TestingModule } from '@nestjs/testing';
import { IngredientToRecetteService } from './ingredient-to-recette.service';

describe('IngredientToRecetteService', () => {
  let service: IngredientToRecetteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientToRecetteService],
    }).compile();

    service = module.get<IngredientToRecetteService>(IngredientToRecetteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
