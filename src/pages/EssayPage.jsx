import EssayLayout from '../layouts/EssayLayout';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function EssayPage({ essay }) {
  useDocumentMetadata({
    title: `${essay.plainTitle} — tastywords`,
    description: essay.description,
  });

  return <EssayLayout essay={essay} />;
}
