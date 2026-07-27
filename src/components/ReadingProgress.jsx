import { useEffect, useState } from 'react';

export default function ReadingProgress({ totalMinutes }) {
  const [remaining, setRemaining] = useState(totalMinutes);

  useEffect(() => {
    const update = () => {
      const documentElement = document.documentElement;
      const scrollableDistance = documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableDistance > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollableDistance))
        : 0;

      setRemaining(Math.max(0, Math.ceil(totalMinutes * (1 - progress))));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [totalMinutes]);

  return (
    <aside className="reading-time" aria-live="polite">
      {remaining > 0 ? `${remaining} min remaining` : 'End of letter'}
    </aside>
  );
}
