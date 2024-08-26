import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotacaoModule } from './votacao/votacao.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/voting-system'),
    VotacaoModule,
  ],
})
export class AppModule {}
