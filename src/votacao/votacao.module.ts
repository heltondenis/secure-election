import { Module } from '@nestjs/common';
import { VotacaoController } from './votacao.controller';
import { VotacaoService } from './votacao.service';

@Module({
  controllers: [VotacaoController],
  providers: [VotacaoService]
})
export class VotacaoModule {}
