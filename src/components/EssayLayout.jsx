import React from 'react';
import EssayFooter from './EssayFooter.jsx';
import EssayHeader from './EssayHeader.jsx';
import ReadingProgress from './ReadingProgress.jsx';
import WheelMarker from './WheelMarker.jsx';
import { estimateReadingMinutes } from '../lib/readingTime.js';

function Paragraph({ value, pullQuotes }) {
  const isPullQuote = pullQuotes.includes(value);
  const isStacked = value.includes('\n');
  const className = [isPullQuote && 'pull', isStacked && 'stacked']
    .filter(Boolean)
    .join(' ');

  return (
    <p className={className || undefined}>
      {isStacked
        ? value.split('\n').map((line) => <span key={line}>{line}</span>)
        : value}
    </p>
  );
}

export default function EssayLayout({ essay }) {
  const allText = essay.sections.flat().join(' ');
  const readingMinutes = estimateReadingMinutes(allText);

  return (
    <>
      <ReadingProgress totalMinutes={readingMinutes} />
      <main>
        <EssayHeader
          title={essay.title}
          subtitle={essay.subtitle}
          readingMinutes={readingMinutes}
        />

        <article className="letter">
          {essay.sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {sectionIndex > 0 && <WheelMarker />}
              <section>
                {section.map((paragraph) => (
                  <Paragraph
                    key={paragraph}
                    value={paragraph}
                    pullQuotes={essay.pullQuotes}
                  />
                ))}
              </section>
            </React.Fragment>
          ))}

          <EssayFooter
            closing={essay.closing}
            signature={essay.signature}
            dateline={essay.dateline}
          />
        </article>
      </main>
    </>
  );
}
