'use server';

/**
 * @fileOverview Recommends the next most relevant educational module based on the student's progress,
 * learning style, and the curriculum structure.
 *
 * - personalizedLearningPath - A function that handles the recommendation process.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  studentId: z.string().describe('The ID of the student.'),
  studentProgress: z.string().describe('The progress of the student in the curriculum.'),
  learningStyle: z.string().describe('The learning style of the student (e.g., visual, auditory, kinesthetic).'),
  curriculumStructure: z.string().describe('The structure of the curriculum, including available modules and their dependencies.'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  recommendedModule: z.string().describe('The ID of the next most relevant educational module for the student.'),
  reasoning: z.string().describe('The reasoning behind the recommendation.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function personalizedLearningPath(input: PersonalizedLearningPathInput): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an AI learning path recommender. Given a student's ID, their learning style, progress, and the curriculum structure, recommend the next most relevant module for the student. Explain your reasoning.

Student ID: {{{studentId}}}
Student Progress: {{{studentProgress}}}
Learning Style: {{{learningStyle}}}
Curriculum Structure: {{{curriculumStructure}}}

Recommend the next module and explain why it is the most relevant based on the student's information.`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
