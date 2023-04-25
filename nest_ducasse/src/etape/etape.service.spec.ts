import { Test, TestingModule } from '@nestjs/testing';
import { EtapeService } from './etape.service';

describe('EtapeService', () => {
  let service: EtapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtapeService],
    }).compile();

    service = module.get<EtapeService>(EtapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
