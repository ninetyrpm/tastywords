import { useRef } from 'react';
import EssayHeader from '../components/EssayHeader';
import EssaySection from '../components/EssaySection';
import EssayClosing from '../components/EssayClosing';
import ReadingProgress from '../components/ReadingProgress';
import useReadingProgress from '../hooks/useReadingProgress';
import { getReadingMinutes } from '../utils/readingTime';

export default function EssayLayout({ essay }) {
  const heroRef = useRef(null);
  const articleRef = useRef(null);
  const readingMinutes = getReadingMinutes(essay);
  const { progress, hasStarted } = useReadingProgress(articleRef, heroRef);

  return (
    <main>
      <EssayHeader
        essay={essay}
        readingMinutes={readingMinutes}
        heroRef={heroRef}
      />

      <ReadingProgress
        progress={progress}
        totalMinutes={readingMinutes}
        visible={hasStarted}
      />

      <article id="letter" className="letter" ref={articleRef}>
        {essay.sections.map((section, index) => (
          <EssaySection
            key={section.id}
            section={section}
            isLast={index === essay.sections.length - 1}
          />
        ))}
        <EssayClosing essay={essay} />
      </article>
    </main>
  );
}
