import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { Vote } from './schemas/vote.schema';

@Injectable()
export class VotacaoService {
  private sdk: ThirdwebSDK;

  constructor(@InjectModel(Vote.name) private voteModel: Model<Vote>) {
    const provider = ethers.getDefaultProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');
    this.sdk = new ThirdwebSDK(provider);
  }

  async castVote(candidateId: string, voterId: string): Promise<Vote> {
    const contract = await this.sdk.getContract('YOUR_CONTRACT_ADDRESS');
    const transaction = await contract.call('castVote', candidateId, voterId);

    const vote = new this.voteModel({
      candidateId,
      voterId,
      timestamp: new Date(),
      transactionHash: transaction.receipt.transactionHash,
    });

    return vote.save();
  }

  async getAllVotes(): Promise<Vote[]> {
    return this.voteModel.find().exec();
  }
}
