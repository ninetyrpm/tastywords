import { useRef } from 'react';
import EssayHeader from './EssayHeader';
import EssaySection from './EssaySection';
import EssayClosing from './EssayClosing';
import { getReadingMinutes } from '../utils/readingTime';

export default function WriterPreview({ essay, compact = true }) {
  const previewRef = useRef(null);
  const articleRef = useRef(null);

  if (!essay) {
    return (
      <div className="writer-preview-empty">
        <p>Start writing to see the essay take shape.</p>
      </div>
    );
  }

  const readingMinutes = getReadingMinutes(essay);

  function scrollToEssay() {
    const article = articleRef.current;
    if (!article) return;

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    const scrollRoot = compact
      ? previewRef.current
      : previewRef.current?.closest('.writer-full-preview');

    if (scrollRoot) {
      const rootRect = scrollRoot.getBoundingClientRect();
      const articleRect = article.getBoundingClientRect();
      scrollRoot.scrollTo({
        top: scrollRoot.scrollTop + articleRect.top - rootRect.top,
        behavior: 'smooth',
      });
      return;
    }

    article.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div ref={previewRef} className={compact ? 'writer-preview is-compact' : 'writer-preview is-full'}>
      <EssayHeader
        essay={essay}
        readingMinutes={readingMinutes}
        onRead={scrollToEssay}
      />
      <article className="letter" ref={articleRef}>
        {essay.sections.map((section, index) => (
          <EssaySection
            key={section.id}
            section={section}
            isLast={index === essay.sections.length - 1}
          />
        ))}
        <EssayClosing essay={essay} />
      </article>
    </div>
  );
}
