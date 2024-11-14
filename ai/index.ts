import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';
// OpenAI model wrapper

export const customOpenAIModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};

// Anthropic model wrapper
export const customAnthropicModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: anthropic(apiIdentifier),
    middleware: customMiddleware,
  });
};
