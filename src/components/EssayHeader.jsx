export default function EssayHeader({ title, subtitle, readingMinutes }) {
  return (
    <header className="hero">
      <p className="eyebrow">A personal reflection</p>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <p className="meta">{readingMinutes} minute read</p>
    </header>
  );
}
