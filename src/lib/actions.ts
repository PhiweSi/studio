'use server';

import {
  generateResumeContent,
  type GenerateResumeContentInput,
  type GenerateResumeContentOutput,
} from '@/ai/flows/generate-resume-content';
import {
  suggestKeywords,
  type SuggestKeywordsInput,
  type SuggestKeywordsOutput,
} from '@/ai/flows/suggest-keywords';
import {
  matchJobDescription,
  type MatchJobDescriptionInput,
  type MatchJobDescriptionOutput,
} from '@/ai/flows/match-job-description';
import {
  learnFromUserEdits,
  type LearnFromUserEditsInput,
  type LearnFromUserEditsOutput,
} from '@/ai/flows/learn-from-user-edits';
import {
  parseResumePdf,
  type ParseResumePdfInput,
  type ParseResumePdfOutput,
} from '@/ai/flows/parse-resume-pdf';
import { checkApiKey } from '@/ai/genkit';
import { GenkitError } from 'genkit';

type ActionError = { error: string; details?: string };

export async function generateResumeContentAction(
  input: GenerateResumeContentInput
): Promise<GenerateResumeContentOutput | ActionError> {
  try {
    checkApiKey();
    return await generateResumeContent(input);
  } catch (e) {
    if (e instanceof GenkitError) {
      return { error: e.message, details: e.details };
    }
    return { error: 'An unexpected error occurred.' };
  }
}

export async function suggestKeywordsAction(
  input: SuggestKeywordsInput
): Promise<SuggestKeywordsOutput | ActionError> {
  try {
    checkApiKey();
    return await suggestKeywords(input);
  } catch (e) {
    if (e instanceof GenkitError) {
      return { error: e.message, details: e.details };
    }
    return { error: 'An unexpected error occurred.' };
  }
}

export async function matchJobDescriptionAction(
  input: MatchJobDescriptionInput
): Promise<MatchJobDescriptionOutput | ActionError> {
  try {
    checkApiKey();
    return await matchJobDescription(input);
  } catch (e) {
    if (e instanceof GenkitError) {
      return { error: e.message, details: e.details };
    }
    return { error: 'An unexpected error occurred.' };
  }
}

export async function learnFromUserEditsAction(
  input: LearnFromUserEditsInput
): Promise<LearnFromUserEditsOutput | ActionError> {
  try {
    checkApiKey();
    return await learnFromUserEdits(input);
  } catch (e) {
    if (e instanceof GenkitError) {
      return { error: e.message, details: e.details };
    }
    return { error: 'An unexpected error occurred.' };
  }
}

export async function parseResumePdfAction(
  input: ParseResumePdfInput
): Promise<ParseResumePdfOutput | ActionError> {
    try {
        checkApiKey();
        return await parseResumePdf(input);
    } catch (e) {
        if (e instanceof GenkitError) {
            return { error: e.message, details: e.details };
        }
        return { error: 'An unexpected error occurred.' };
    }
}
