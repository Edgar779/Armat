import { Document } from 'mongoose';

export interface IOrgCategory extends Document {
  name: string;
  parent: IOrgCategory['_id'];
  nonProfitUsers: string[];
  businessUsers: string[];
  businessUsedCount?: number;
  nonProfitUsedCount?: number;
}

export interface ICatUsedCount {
  businessSet: Set<string>;
  nonProfitSet: Set<string>;
}
