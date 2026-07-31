import { parseEssayMarkdown } from './parseEssay';

const essayFiles = import.meta.glob('./*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const essays = Object.entries(essayFiles).map(([filename, source]) =>
  parseEssayMarkdown(source, filename),
);

export function getEssayBySlug(slug) {
  return essays.find((essay) => essay.slug === slug);
}
