import { Test, TestingModule } from '@nestjs/testing';
import { RecetteController } from './recette.controller';
import { RecetteService } from './recette.service';

describe('RecetteController', () => {
  let controller: RecetteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetteController],
      providers: [RecetteService],
    }).compile();

    controller = module.get<RecetteController>(RecetteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
