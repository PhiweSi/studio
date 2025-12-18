"use server";

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


export async function generateResumeContentAction(
  input: GenerateResumeContentInput
): Promise<GenerateResumeContentOutput> {
  checkApiKey();
  return await generateResumeContent(input);
}

export async function suggestKeywordsAction(
  input: SuggestKeywordsInput
): Promise<SuggestKeywordsOutput> {
  checkApiKey();
  return await suggestKeywords(input);
}

export async function matchJobDescriptionAction(
  input: MatchJobDescriptionInput
): Promise<MatchJobDescriptionOutput> {
  checkApiKey();
  return await matchJobDescription(input);
}

export async function learnFromUserEditsAction(
  input: LearnFromUserEditsInput
): Promise<LearnFromUserEditsOutput> {
  checkApiKey();
  return await learnFromUserEdits(input);
}

export async function parseResumePdfAction(
  input: ParseResumePdfInput
): Promise<ParseResumePdfOutput> {
    checkApiKey();
    return await parseResumePdf(input);
}
