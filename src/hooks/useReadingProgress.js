import { useEffect, useState } from 'react';

export default function useReadingProgress(articleRef, heroRef) {
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const update = () => {
      const article = articleRef.current;
      const hero = heroRef.current;
      if (!article || !hero) return;

      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleHeight = article.offsetHeight;
      const viewportHeight = window.innerHeight;
      const distance = Math.max(1, articleHeight - viewportHeight);
      const travelled = Math.max(0, window.scrollY - articleTop);

      setProgress(Math.min(1, travelled / distance));
      setHasStarted(hero.getBoundingClientRect().bottom <= 24);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [articleRef, heroRef]);

  return { progress, hasStarted };
}
