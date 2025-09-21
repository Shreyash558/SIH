'use server';

import { personalizedLearningPath } from "@/ai/flows/personalized-learning-path";
import type { PersonalizedLearningPathOutput } from "@/ai/flows/personalized-learning-path";

type SuggestionState = {
    suggestion: PersonalizedLearningPathOutput | null;
    error: string | null;
}

export async function getLearningPathSuggestion(
  prevState: SuggestionState,
  formData: FormData
): Promise<SuggestionState> {
  try {
    const input = {
      studentId: 'student-123',
      studentProgress: 'Completed modules on basic algebra and geometry. Struggling with trigonometry.',
      learningStyle: 'Visual',
      curriculumStructure: 'Modules: Algebra, Geometry, Trigonometry, Calculus. Trigonometry requires Algebra and Geometry.',
    };
    // Adding a delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = await personalizedLearningPath(input);
    return { suggestion: result, error: null };
  } catch (e: any) {
    console.error(e);
    return { suggestion: null, error: 'Failed to generate suggestion. Please try again.' };
  }
}
