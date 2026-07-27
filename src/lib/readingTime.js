export const WORDS_PER_MINUTE = 220;

export function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function estimateReadingMinutes(text, wordsPerMinute = WORDS_PER_MINUTE) {
  return Math.max(1, Math.ceil(countWords(text) / wordsPerMinute));
}
