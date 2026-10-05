import { Language, Question, ShuffledQuestion } from '../types';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { questionsPart4 } from './questionsPart4';

export const ALL_QUESTIONS: Question[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
];

// Helper to shuffle an array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Select exactly 20 non-repeating questions and shuffle alternatives
export function selectMatchQuestions(lang: Language, count: number = 20): ShuffledQuestion[] {
  // 1. Pick 20 unique random questions
  const shuffledQuestions = shuffleArray(ALL_QUESTIONS).slice(0, count);

  // 2. Format each question with localized texts and shuffled alternatives
  return shuffledQuestions.map((q) => {
    const translation = q.translations[lang] || q.translations['pt-BR'];
    const originalOptions = translation.options;
    const correctText = originalOptions[q.correctIndex];

    // Shuffle the 4 alternatives
    const shuffledOptions = shuffleArray(originalOptions);
    const newCorrectIndex = shuffledOptions.indexOf(correctText);

    return {
      id: q.id,
      category: q.category,
      difficulty: q.difficulty,
      question: translation.question,
      options: shuffledOptions,
      correctOptionIndex: newCorrectIndex,
      explanation: translation.explanation,
      staffData: q.staffData,
    };
  });
}
