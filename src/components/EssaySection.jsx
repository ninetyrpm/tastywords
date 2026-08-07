import WheelMarker from './WheelMarker';

const INLINE_MARKDOWN_PATTERN =
  /(\[([^\]]+)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)|\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\n]+)\*|_([^_\n]+)_)/g;

function InlineText({ text }) {
  const nodes = [];
  let cursor = 0;
  let match;

  INLINE_MARKDOWN_PATTERN.lastIndex = 0;

  while ((match = INLINE_MARKDOWN_PATTERN.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const [raw, , linkLabel, href, linkTitle, boldAsterisk, boldUnderscore, italicAsterisk, italicUnderscore] = match;
    const key = `${match.index}-${raw}`;

    if (linkLabel !== undefined) {
      const isExternal = /^(https?:)?\/\//i.test(href);

      nodes.push(
        <a
          className="essay-link"
          href={href}
          key={key}
          title={linkTitle || undefined}
          {...(isExternal
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <InlineText text={linkLabel} />
        </a>,
      );
    } else if (boldAsterisk !== undefined || boldUnderscore !== undefined) {
      nodes.push(
        <strong key={key}>
          <InlineText text={boldAsterisk ?? boldUnderscore} />
        </strong>,
      );
    } else {
      nodes.push(
        <em key={key}>
          <InlineText text={italicAsterisk ?? italicUnderscore} />
        </em>,
      );
    }

    cursor = match.index + raw.length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

function Paragraph({ text, kind, asset }) {
  if (kind === 'stacked') {
    return (
      <div className="stacked">
        {text.split('\n').map((line) => (
          <span key={line}>
            <InlineText text={line} />
          </span>
        ))}
      </div>
    );
  }

  if (kind === 'pull') {
    return (
      <p className="pull">
        <InlineText text={text} />
      </p>
    );
  }

  if (kind === 'section-title') {
    return (
      <h2 className="section-title">
        <InlineText text={text} />
      </h2>
    );
  }

  if (kind === 'editorial-note') {
    return (
      <aside className="editorial-note">
        <InlineText text={text} />
      </aside>
    );
  }

  if (kind === 'edit-flag') {
    return (
      <aside className="edit-flag">
        <InlineText text={text} />
      </aside>
    );
  }

  if (kind === 'image' && asset) {
    const modifierClasses = (asset.modifiers ?? [])
      .map((modifier) => `essay-figure--${modifier}`)
      .join(' ');

    return (
      <figure className={`essay-figure ${modifierClasses}`.trim()}>
        <div className="essay-figure-frame">
          <img
            src={asset.src}
            alt={asset.alt}
            title={asset.title}
            loading="lazy"
          />
        </div>
        {asset.caption && (
          <figcaption className="essay-caption">
            <InlineText text={asset.caption} />
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <p>
      <InlineText text={text} />
    </p>
  );
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
