import WheelMarker from './WheelMarker';

function InlineText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function Paragraph({ text, kind }) {
  if (kind === 'stacked') {
    return (
      <div className="stacked">
        {text.split('\n').map((line) => (
          <span key={line}><InlineText text={line} /></span>
        ))}
      </div>
    );
  }

  if (kind === 'pull') {
    return <p className="pull"><InlineText text={text} /></p>;
  }

  if (kind === 'section-title') {
    return <h2 className="section-title"><InlineText text={text} /></h2>;
  }

  if (kind === 'editorial-note') {
    return <aside className="editorial-note"><InlineText text={text} /></aside>;
  }

  return <p><InlineText text={text} /></p>;
}

export default function EssaySection({ section, isLast }) {
  return (
    <>
      <section>
        {section.paragraphs.map((paragraph, index) => (
          <Paragraph
            key={`${section.id}-${index}`}
            text={paragraph}
            kind={section.styles?.[index]}
          />
        ))}
      </section>
      {!isLast && <WheelMarker />}
    </>
  );
}
