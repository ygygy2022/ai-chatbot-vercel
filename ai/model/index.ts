import { AnthropicModels } from '@/ai/model/Anthropic/models';
import { GoogleModels } from '@/ai/model/google/models';
import { OpenAIModels } from '@/ai/model/open-ai/models';
import { Model } from '@/ai/models';

export const Models: Model[] = [
  ...OpenAIModels,
  ...GoogleModels,
  ...AnthropicModels,
] as const;
