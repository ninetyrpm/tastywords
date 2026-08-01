import EssayHeader from './EssayHeader';
import EssaySection from './EssaySection';
import EssayClosing from './EssayClosing';
import { getReadingMinutes } from '../utils/readingTime';

export default function WriterPreview({ essay, compact = true }) {
  if (!essay) {
    return (
      <div className="writer-preview-empty">
        <p>Start writing to see the essay take shape.</p>
      </div>
    );
  }

  const readingMinutes = getReadingMinutes(essay);

  return (
    <div className={compact ? 'writer-preview is-compact' : 'writer-preview'}>
      <EssayHeader essay={essay} readingMinutes={readingMinutes} />
      <article id="letter" className="letter">
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
