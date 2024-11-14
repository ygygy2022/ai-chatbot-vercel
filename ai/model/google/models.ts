import { Model } from '@/ai/models';

const googleProgrammingModel: Model = {
  id: 'gemini-1.5-pro-programming',
  label: 'Google Programming',
  apiIdentifier: 'gemini-1.5-pro-latest',
  description: 'This is the Google Programming model. Use Gemini 1.5 Pro',
  provider: 'google',
};

export const GoogleModels = [googleProgrammingModel] as const;
