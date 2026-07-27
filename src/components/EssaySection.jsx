import WheelMarker from './WheelMarker';

function Paragraph({ text, kind }) {
  if (kind === 'stacked') {
    return (
      <div className="stacked">
        {text.split('\n').map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    );
  }

  if (kind === 'pull') {
    return <p className="pull">{text}</p>;
  }

  return <p>{text}</p>;
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
