export default function ReadingProgress({ progress, totalMinutes, visible }) {
  const remaining = Math.max(1, Math.ceil(totalMinutes * (1 - progress)));
  const label = progress >= 0.97 ? 'Finish' : `${remaining} min remaining`;

  return (
    <div
      className={`reading-time${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
    >
      {label}
    </div>
  );
}
