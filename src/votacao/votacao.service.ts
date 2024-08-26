import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as Blockchain from 'blockchain-js';
import { Vote } from './schemas/vote.schema';

@Injectable()
export class VotacaoService {
  private blockchain: any;

  constructor(@InjectModel(Vote.name) private voteModel: Model<Vote>) {
    this.blockchain = new Blockchain.Blockchain();
  }

  async castVote(candidateId: string, voterId: string): Promise<Vote> {
    const newBlock = this.blockchain.addBlock({
      candidateId,
      voterId,
      timestamp: new Date(),
    });

    const vote = new this.voteModel({
      candidateId,
      voterId,
      timestamp: new Date(),
      transactionHash: newBlock.hash,
    });

    return vote.save();
  }

  async getAllVotes(): Promise<Vote[]> {
    return this.voteModel.find().exec();
  }
}
