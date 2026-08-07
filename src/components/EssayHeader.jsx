import { Link } from 'react-router-dom';
import ScrollCue from './ScrollCue';

export default function EssayHeader({ essay, readingMinutes, heroRef, onRead, showHomeLink = false }) {
  return (
    <header className="hero" ref={heroRef}>
      {showHomeLink && (
        <Link className="essay-home-link" to="/" aria-label="Back to Tastywords home">
          <span aria-hidden="true">←</span> tastywords
        </Link>
      )}
      <div className="hero-copy">
        <p className="eyebrow">{essay.eyebrow ?? 'Essay'}</p>
        <h1>
          {essay.titleLines.map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>
        <p className="subtitle">{essay.subtitle}</p>
        <p className="meta">{readingMinutes} min read</p>
      </div>
      <ScrollCue onActivate={onRead} />
    </header>
  );
}
