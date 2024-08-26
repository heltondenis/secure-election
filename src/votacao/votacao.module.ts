import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotacaoService } from './votacao.service';
import { VotacaoController } from './votacao.controller';
import { Vote, VoteSchema } from './schemas/vote.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
  ],
  providers: [VotacaoService],
  controllers: [VotacaoController],
})
export class VotacaoModule {}
