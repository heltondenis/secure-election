import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ethers } from 'ethers';
import { Vote } from './schemas/vote.schema';

@Injectable()
export class VotacaoService {
  private provider: ethers.providers.JsonRpcProvider;
  private contract: ethers.Contract;

  constructor(@InjectModel(Vote.name) private voteModel: Model<Vote>) {
    // Configura a conexão com a blockchain local do Hardhat
    this.provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

    // Use o endereço do contrato que foi implantado
    const contractAddress = '0x5869B43f1DD2162a26Da332BF9197E0EE837579B';

    // Defina a ABI do contrato
    const abi = [
      "function addCandidate(string memory _name) public",
      "function vote(uint _candidateId) public",
      "function candidates(uint _candidateId) public view returns (uint id, string name, uint voteCount)",
      "event Voted(address indexed voter, uint indexed candidateId)"
    ];

    // Inicializa o contrato
    this.contract = new ethers.Contract(contractAddress, abi, this.provider.getSigner());
  }

  // Método para adicionar um candidato
  async addCandidate(name: string): Promise<void> {
    const transaction = await this.contract.addCandidate(name);
    await transaction.wait(); // Aguarde a transação ser minerada
  }

  // Método que encapsula a lógica de votar
  async castVote(candidateId: string, voterId: string): Promise<Vote> {
    const transaction = await this.contract.vote(candidateId);

    const vote = new this.voteModel({
      candidateId,
      voterId,
      timestamp: new Date(),
      transactionHash: transaction.hash,
    });

    return vote.save();
  }

  // Método para obter os detalhes de um candidato
  async getCandidate(candidateId: number): Promise<any> {
    const candidate = await this.contract.candidates(candidateId);
    return candidate;
  }

  // Método adicional para obter todos os candidatos
  async getAllCandidates(): Promise<any[]> {
    const candidates = [];
    for (let i = 1; i <= await this.contract.candidatesCount(); i++) {
      const candidate = await this.getCandidate(i);
      candidates.push(candidate);
    }
    return candidates;
  }
}
