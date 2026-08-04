import { useRef } from 'react';
import EssayHeader from './EssayHeader';
import EssaySection from './EssaySection';
import EssayClosing from './EssayClosing';
import { getReadingMinutes } from '../utils/readingTime';

export default function WriterPreview({ essay, compact = true }) {
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
    articleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={compact ? 'writer-preview is-compact' : 'writer-preview'}>
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
