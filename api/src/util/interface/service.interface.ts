import { Model } from 'mongoose';

export interface IService<T> {
  model: Model<T>;
  create?(dto: any): Promise<any>;
  edit?(id: string, dto: any): Promise<any>;
  get?(id: string): Promise<any>;
  getMany?(ids: string[]): Promise<any[]>;
  getAll?(): Promise<any>;
  getRaw?(id: string): Promise<any>;
}
