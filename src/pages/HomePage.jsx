import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { essays } from '../content/essays';
import { getReadingMinutes } from '../utils/readingTime';

const SORT_OPTIONS = [
  { value: 'newest', label: 'newest' },
  { value: 'oldest', label: 'oldest' },
  { value: 'title', label: 'title' },
  { value: 'shortest', label: 'shortest' },
  { value: 'longest', label: 'longest' },
];

function getDateValue(essay) {
  if (!essay.publishedDate) return 0;
  const timestamp = Date.parse(`${essay.publishedDate}T12:00:00`);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function formatPublishedDate(value) {
  if (!value) return '';
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export default function HomePage() {
  useDocumentMetadata({
    title: 'tastywords',
    description: 'Essays and reflections from tastywords.',
  });

  const [sortBy, setSortBy] = useState('newest');

  const publishedEssays = useMemo(() => {
    const visible = essays
      .filter((essay) => essay.status === 'published')
      .map((essay) => ({
        ...essay,
        readingMinutes: getReadingMinutes(essay),
      }));

    return visible.sort((left, right) => {
      switch (sortBy) {
        case 'oldest':
          return getDateValue(left) - getDateValue(right);
        case 'title':
          return left.plainTitle.localeCompare(right.plainTitle, undefined, {
            sensitivity: 'base',
          });
        case 'shortest':
          return (
            left.readingMinutes - right.readingMinutes ||
            getDateValue(right) - getDateValue(left)
          );
        case 'longest':
          return (
            right.readingMinutes - left.readingMinutes ||
            getDateValue(right) - getDateValue(left)
          );
        case 'newest':
        default:
          return getDateValue(right) - getDateValue(left);
      }
    });
  }, [sortBy]);

  return (
    <main className="home-page" aria-label="Tastywords essays">
      <header className="home-header">
        <h1 className="home-wordmark">tastywords</h1>
      </header>

      <section className="home-index" aria-label="Published essays">
        <div className="home-sort">
          <label htmlFor="essay-sort">sort by:</label>
          <select
            id="essay-sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="essay-card-list">
          {publishedEssays.map((essay) => (
            <Link
              className="essay-card"
              to={`/${essay.slug}`}
              key={essay.slug}
              aria-label={`Read ${essay.plainTitle}`}
            >
              <div>
                <h2>{essay.plainTitle}</h2>
                <p className="essay-card-subtitle">{essay.subtitle}</p>
              </div>
              <div className="essay-card-meta">
                <time dateTime={essay.publishedDate || undefined}>
                  {formatPublishedDate(essay.publishedDate)}
                </time>
                <span>{essay.readingMinutes} min</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <a
          href="https://www.instagram.com/ninetyrpm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ninetyrpm
        </a>
        <span aria-hidden="true">·</span>
        <a
          href="https://ko-fi.com/F1F8WHY47"
          target="_blank"
          rel="noopener noreferrer"
        >
          support tastywords
        </a>
      </footer>
    </main>
  );
}
