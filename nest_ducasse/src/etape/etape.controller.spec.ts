import { Test, TestingModule } from '@nestjs/testing';
import { EtapeController } from './etape.controller';
import { EtapeService } from './etape.service';

describe('EtapeController', () => {
  let controller: EtapeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtapeController],
      providers: [EtapeService],
    }).compile();

    controller = module.get<EtapeController>(EtapeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
