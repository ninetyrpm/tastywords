const WORDS_PER_MINUTE = 225;

const sections = [
  // Keep all preceding sections unchanged.

  {
    id: 'foundation',
    paragraphs: [
      `This injury has forced me to ask myself a difficult question. Not whether I want to come back—I do, without hesitation—but whether I've allowed too much of my life to rest on one remarkably fragile piece of anatomy.`,

      `Cycling has given me far more than it has ever taken away. Maybe the lesson is not to love it less, but to build a life with more than one foundation.`,

      `Because someday, whether through injury, age, or circumstance, every cyclist rides home for the last time.`,

      `When that day comes for me, I know I will leave a tremendous part of myself with the bicycle. But I hope I will have learned that what mattered most was never the bicycle alone. It was the people, the friendships, and the life it carried me toward.`,
    ],
    styles: { 2: 'pull' },
  },
];

const wordCount = sections
  .flatMap((section) => section.paragraphs)
  .join(' ')
  .trim()
  .split(/\s+/)
  .filter(Boolean).length;

const essay = {
  slug: 'open-letter-cycling',
  plainTitle: 'An Open Letter to the Cycling Community',
  titleLines: ['An Open Letter', 'to the Cycling Community'],
  subtitle:
    'On injury, identity, community, and what remains after the bike is put away.',
  signature: 'Ken',
  dateline: 'Louisville, Kentucky · August 2026',
  readingTime: `${Math.max(
    1,
    Math.ceil(wordCount / WORDS_PER_MINUTE),
  )} min read`,
  sections,
};

export default essay;
