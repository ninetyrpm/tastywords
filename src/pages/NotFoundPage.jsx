import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function NotFoundPage() {
  useDocumentMetadata({
    title: 'Page not found — tastywords',
    description: 'The requested page could not be found.',
  });

  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Nothing is published here.</h1>
      <Link to="/">Return to tastywords</Link>
    </main>
  );
}
