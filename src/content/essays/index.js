import openLetterCycling from './open-letter-cycling';

export const essays = [openLetterCycling];

export function getEssayBySlug(slug) {
  return essays.find((essay) => essay.slug === slug);
}
