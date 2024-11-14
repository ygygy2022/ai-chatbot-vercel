// Define your models here.
import { Models } from '@/ai/model/index';

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider?: string;
}

export const models: Array<Model> = [...Models] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
