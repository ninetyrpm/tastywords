import { parseEssayMarkdown } from './parseEssay';

const essayFiles = import.meta.glob('./*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const essaySources = Object.fromEntries(
  Object.entries(essayFiles).map(([filename, source]) => {
    const essay = parseEssayMarkdown(source, filename);
    return [essay.slug, { filename, source, essay }];
  }),
);

export const essays = Object.values(essaySources).map(({ essay }) => essay);

export function getEssayBySlug(slug) {
  return essaySources[slug]?.essay;
}

export function getEssaySourceBySlug(slug) {
  return essaySources[slug]?.source;
}
