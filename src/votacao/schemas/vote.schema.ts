import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vote extends Document {
  @Prop({ required: true })
  candidateId: string;

  @Prop({ required: true })
  voterId: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  transactionHash: string;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
