import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotacaoModule } from './votacao/votacao.module';
import { VotacaoModule } from './votacao/votacao.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/voting-system'), // Substitua com sua URL MongoDB
    VotacaoModule,
  ],
})
export class AppModule {}
