import { Navigate, useParams } from 'react-router-dom';
import EssayLayout from '../layouts/EssayLayout';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { getEssayBySlug } from '../content/essays';

export default function EssayPage() {
  const { slug } = useParams();
  const essay = getEssayBySlug(slug);

  useDocumentMetadata({
    title: essay ? `${essay.plainTitle} — tastywords` : 'Page not found — tastywords',
    description:
      essay?.description ??
      essay?.subtitle ??
      'The requested page could not be found.',
  });

  if (!essay) {
    return <Navigate to="/404" replace />;
  }

  return <EssayLayout essay={essay} />;
}
