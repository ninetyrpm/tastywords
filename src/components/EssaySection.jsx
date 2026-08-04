import WheelMarker from './WheelMarker';

function InlineText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (
      (part.startsWith('*') && part.endsWith('*')) ||
      (part.startsWith('_') && part.endsWith('_'))
    ) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function Paragraph({ text, kind, asset }) {
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

  if (kind === 'edit-flag') {
    return <aside className="edit-flag"><InlineText text={text} /></aside>;
  }

  if (kind === 'image' && asset) {
    const modifierClasses = (asset.modifiers ?? [])
      .map((modifier) => `essay-figure--${modifier}`)
      .join(' ');

    return (
      <figure className={`essay-figure ${modifierClasses}`.trim()}>
        <div className="essay-figure-frame">
          <img src={asset.src} alt={asset.alt} title={asset.title} loading="lazy" />
        </div>
        {asset.caption && (
          <figcaption className="essay-caption">
            <InlineText text={asset.caption} />
          </figcaption>
        )}
      </figure>
    );
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
            asset={section.assets?.[index]}
          />
        ))}
      </section>
      {!isLast && <WheelMarker />}
    </>
  );
}
