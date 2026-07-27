import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function HomePage() {
  useDocumentMetadata({
    title: 'tastywords',
    description: 'An independent home for occasional essays and reflections.',
  });

  return (
    <main className="reserved-home" aria-label="Tastywords">
      <p className="site-name">tastywords</p>
      <p className="site-status">This space is being assembled.</p>
    </main>
  );
}
