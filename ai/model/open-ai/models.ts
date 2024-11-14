import { Model } from '@/ai/models';
const openAI4oMiniModel: Model = {
  id: 'gpt-4o-mini',
  label: 'GPT 4o mini',
  apiIdentifier: 'gpt-4o-mini',
  description: 'Small model for fast, lightweight tasks',
  provider: 'openai',
};
const openAI4oModel: Model = {
  id: 'gpt-4o',
  label: 'GPT 4o',
  apiIdentifier: 'gpt-4o',
  description: 'For complex, multi-step tasks',
  provider: 'openai',
};
const openAI4oCanvasModel: Model = {
  id: 'gpt-4o-canvas',
  label: 'GPT 4o with Canvas',
  apiIdentifier: 'gpt-4o',
  description: 'Collaborate with writing',
  provider: 'openai',
};

export const OpenAIModels = [
  openAI4oMiniModel,
  openAI4oModel,
  openAI4oCanvasModel,
] as const;
