import { useEffect } from 'react';

export default function useDocumentMetadata({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content') ?? '';

    document.title = title;
    if (descriptionTag && description) {
      descriptionTag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag) {
        descriptionTag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
