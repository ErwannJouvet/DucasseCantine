import { Test, TestingModule } from '@nestjs/testing';
import { RangService } from './rang.service';

describe('RangService', () => {
  let service: RangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RangService],
    }).compile();

    service = module.get<RangService>(RangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
