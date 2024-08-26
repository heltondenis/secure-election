import { Test, TestingModule } from '@nestjs/testing';
import { VotacaoService } from './votacao.service';

describe('VotacaoService', () => {
  let service: VotacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotacaoService],
    }).compile();

    service = module.get<VotacaoService>(VotacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
