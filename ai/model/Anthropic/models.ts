import { Model } from '@/ai/models';

const claude35ProgrammingModel: Model = {
  id: 'claude-3-5-sonnet-latest-for-programming',
  label: 'Claude 3 sonnet',
  apiIdentifier: 'claude-3-5-sonnet-latest',
  description: 'Highest level of intelligence and capability',
  provider: 'anthropic',
};

export const AnthropicModels = [claude35ProgrammingModel] as const;
