import {genkit, GenkitError} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {Plugin} from 'genkit';

const geminiApiKey = process.env.GEMINI_API_KEY;

const plugins: Plugin[] = [];
if (geminiApiKey) {
  plugins.push(googleAI());
}

export const ai = genkit({
  plugins,
  model: 'googleai/gemini-2.5-flash',
});

export function checkApiKey() {
  if (!geminiApiKey) {
    throw new GenkitError({
      status: 'UNAUTHENTICATED',
      message:
        'The GEMINI_API_KEY environment variable is not set. Please set it to your API key in the .env file to use the AI features.',
    });
  }
}
