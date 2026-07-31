import { parseEssayMarkdown } from './parseEssay';

const essayFiles = import.meta.glob('./*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const allEssays = Object.entries(essayFiles).map(([filename, source]) =>
  parseEssayMarkdown(source, filename),
);

const includeDrafts =
  import.meta.env.DEV || import.meta.env.VITE_INCLUDE_DRAFTS === 'true';

export const essays = allEssays.filter(
  (essay) => includeDrafts || essay.draft !== true,
);

export function getEssayBySlug(slug) {
  return essays.find((essay) => essay.slug === slug);
}
