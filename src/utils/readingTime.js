const WORDS_PER_MINUTE = 220;

export function getEssayText(essay) {
  const body = essay.sections.flatMap((section) => section.paragraphs);
  return [
    essay.plainTitle,
    essay.subtitle,
    ...body,
    essay.closing,
  ].join(' ');
}

export function getReadingMinutes(essay) {
  const words = getEssayText(essay)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
