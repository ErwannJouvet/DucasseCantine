import { Test, TestingModule } from '@nestjs/testing';
import { RangController } from './rang.controller';
import { RangService } from './rang.service';

describe('RangController', () => {
  let controller: RangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RangController],
      providers: [RangService],
    }).compile();

    controller = module.get<RangController>(RangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
