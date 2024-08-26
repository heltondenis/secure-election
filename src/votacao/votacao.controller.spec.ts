import { Controller, Post, Body, Get } from '@nestjs/common';
import { VotacaoService } from './votacao.service';

@Controller('votacao')
export class VotacaoController {
  constructor(private readonly votacaoService: VotacaoService) {}

  @Post('votar')
  async castVote(@Body('candidateId') candidateId: string, @Body('voterId') voterId: string) {
    return this.votacaoService.castVote(candidateId, voterId);
  }

  @Get('votos')
  async getAllVotes() {
    return this.votacaoService.getAllVotes();
  }
}
