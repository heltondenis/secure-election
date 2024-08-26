import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VotacaoService } from './votacao.service';

@Controller('votacao')
export class VotacaoController {
  constructor(private readonly votacaoService: VotacaoService) {}

  @Post('add-candidate')
  async addCandidate(@Body('name') name: string) {
    await this.votacaoService.addCandidate(name);
    return { message: 'Candidato adicionado com sucesso!' };
  }

  @Post('vote')
  async castVote(@Body('candidateId') candidateId: string, @Body('voterId') voterId: string) {
    return this.votacaoService.castVote(candidateId, voterId);
  }

  @Get('candidate/:id')
  async getCandidate(@Param('id') candidateId: number) {
    return this.votacaoService.getCandidate(candidateId);
  }

  @Get('candidates')
  async getAllCandidates() {
    return this.votacaoService.getAllCandidates();
  }
}
