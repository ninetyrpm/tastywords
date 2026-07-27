import ScrollCue from './ScrollCue';

export default function EssayHeader({ essay, readingMinutes, heroRef }) {
  return (
    <header className="hero" ref={heroRef}>
      <div className="hero-copy">
        <p className="eyebrow">Open Letter</p>
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
      <ScrollCue />
    </header>
  );
}
