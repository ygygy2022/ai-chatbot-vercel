// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider?: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
  {
    id: 'gpt-4o-canvas',
    label: 'GPT 4o with Canvas',
    apiIdentifier: 'gpt-4o',
    description: 'Collaborate with writing',
  },
  {
    id: 'claude-3-5-sonnet-latest-for-programming',
    label: 'Claude 3 sonnet',
    apiIdentifier: 'claude-3-5-sonnet-latest',
    description: 'Highest level of intelligence and capability',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';
