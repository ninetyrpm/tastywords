import { useEffect, useMemo, useState } from 'react';
import WriterPreview from '../components/WriterPreview';
import useDocumentMetadata from '../hooks/useDocumentMetadata';
import { essays, getEssaySourceBySlug } from '../content/essays';
import { parseEssayDocument, parseEssayMarkdown } from '../content/essays/parseEssay';

const IMAGE_SYNTAX_HELP = '![Alt text](/images/file.png)' + '{border wide}';

const EMPTY_FORM = {
  slug: '',
  plainTitle: '',
  titleLines: '',
  subtitle: '',
  eyebrow: 'Essay',
  signature: 'Ken',
  dateline: 'Louisville, Kentucky · August 2026',
  closing: '',
  body: '',
};

function yamlValue(value) {
  const text = String(value ?? '');
  if (!text) return "''";
  if (/[:#\[\]{}&,*!|>'\"%@`]|^[-?]|\s$/.test(text)) {
    return JSON.stringify(text);
  }
  return text;
}

function buildSource(form) {
  const titleLines = form.titleLines
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const frontMatter = [
    '---',
    `slug: ${yamlValue(form.slug.trim())}`,
    `plainTitle: ${yamlValue(form.plainTitle.trim())}`,
    'titleLines:',
    ...titleLines.map((line) => `  - ${yamlValue(line)}`),
    `subtitle: ${yamlValue(form.subtitle.trim())}`,
    `eyebrow: ${yamlValue(form.eyebrow.trim() || 'Essay')}`,
    `signature: ${yamlValue(form.signature.trim() || 'Ken')}`,
    `dateline: ${yamlValue(form.dateline.trim())}`,
  ];

  if (form.closing.trim()) {
    frontMatter.push(`closing: ${yamlValue(form.closing.trim())}`);
  }

  frontMatter.push('---');
  return `${frontMatter.join('\n')}\n\n${form.body.trim()}\n`;
}

function formFromSource(source) {
  const { data, body } = parseEssayDocument(source);
  return {
    slug: data.slug ?? '',
    plainTitle: data.plainTitle ?? '',
    titleLines: Array.isArray(data.titleLines) ? data.titleLines.join('\n') : '',
    subtitle: data.subtitle ?? '',
    eyebrow: data.eyebrow ?? 'Essay',
    signature: data.signature ?? 'Ken',
    dateline: data.dateline ?? '',
    closing: data.closing ?? '',
    body,
  };
}

export default function WriterPage() {
  useDocumentMetadata({
    title: 'Writing Portal — tastywords',
    description: 'Private writing and publishing portal for tastywords.',
  });

  const [form, setForm] = useState(() => {
    const saved = window.localStorage.getItem('tastywords-writer-draft');
    if (!saved) return EMPTY_FORM;
    try {
      return { ...EMPTY_FORM, ...JSON.parse(saved) };
    } catch {
      return EMPTY_FORM;
    }
  });
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);
  const [fullPreview, setFullPreview] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.localStorage.setItem('tastywords-writer-draft', JSON.stringify(form));
      setStatus((current) => (current.startsWith('Published') ? current : 'Saved in this browser'));
    }, 450);

    return () => window.clearTimeout(timeout);
  }, [form]);

  const source = useMemo(() => buildSource(form), [form]);

  const previewSource = useMemo(() => buildSource({
    ...form,
    slug: form.slug.trim() || 'untitled-draft',
    plainTitle: form.plainTitle.trim() || 'Untitled',
    titleLines:
      form.titleLines.trim() || form.plainTitle.trim() || 'Untitled',
    subtitle: form.subtitle.trim() || 'Draft in progress',
    body: form.body.trim() || 'Begin writing…',
  }), [form]);

  const preview = useMemo(() => {
    try {
      return { essay: parseEssayMarkdown(previewSource, 'writer-preview.md'), error: '' };
    } catch (error) {
      return { essay: null, error: error.message };
    }
  }, [previewSource]);

  const publication = useMemo(() => {
    try {
      return { essay: parseEssayMarkdown(source, 'writer.md'), error: '' };
    } catch (error) {
      return { essay: null, error: error.message };
    }
  }, [source]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function loadEssay(event) {
    const slug = event.target.value;
    if (!slug) return;
    const existing = getEssaySourceBySlug(slug);
    if (existing) {
      setForm(formFromSource(existing));
      setStatus(`Loaded /${slug}`);
    }
    event.target.value = '';
  }

  function newEssay() {
    if (!window.confirm('Start a new essay? Your current browser draft will be replaced.')) return;
    setForm(EMPTY_FORM);
    setStatus('New essay');
  }

  function downloadMarkdown() {
    const blob = new Blob([source], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${form.slug || 'tastywords-draft'}.md`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function publish() {
    if (!publication.essay) {
      setStatus(publication.error || 'Fix the essay before publishing.');
      return;
    }
    if (!password) {
      setStatus('Enter the publishing password.');
      return;
    }
    if (!window.confirm(`Publish /${form.slug} directly to production?`)) return;

    setIsPublishing(true);
    setStatus('Publishing…');

    try {
      const response = await fetch('/api/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          slug: form.slug,
          source,
          title: form.plainTitle,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Publishing failed.');

      setPassword('');
      setStatus(`Published. Vercel is deploying commit ${result.commit.slice(0, 7)}.`);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsPublishing(false);
    }
  }

  return (
    <main className="writer-shell">
      <header className="writer-toolbar">
        <div>
          <p className="writer-brand">tastywords</p>
          <p className="writer-status" aria-live="polite">{status || 'Ready'}</p>
        </div>
        <div className="writer-actions">
          <select aria-label="Load a published essay" defaultValue="" onChange={loadEssay}>
            <option value="" disabled>Load essay…</option>
            {essays.map((essay) => (
              <option key={essay.slug} value={essay.slug}>{essay.plainTitle}</option>
            ))}
          </select>
          <button type="button" className="writer-button" onClick={newEssay}>New</button>
          <button type="button" className="writer-button" onClick={downloadMarkdown}>Download .md</button>
          <button type="button" className="writer-button" onClick={() => setFullPreview(true)} disabled={!preview.essay}>Full preview</button>
        </div>
      </header>

      <div className="writer-workspace">
        <section className="writer-editor" aria-label="Essay editor">
          <div className="writer-fields">
            <label>
              URL slug
              <input name="slug" value={form.slug} onChange={updateField} placeholder="the-guest" />
            </label>
            <label>
              Plain title
              <input name="plainTitle" value={form.plainTitle} onChange={updateField} placeholder="The Guest" />
            </label>
            <label>
              Title lines <small>one line per row</small>
              <textarea name="titleLines" value={form.titleLines} onChange={updateField} rows="2" placeholder={'The Guest'} />
            </label>
            <label>
              Subtitle
              <input name="subtitle" value={form.subtitle} onChange={updateField} placeholder="On Belonging Without Possession" />
            </label>
            <div className="writer-field-row">
              <label>
                Eyebrow
                <input name="eyebrow" value={form.eyebrow} onChange={updateField} />
              </label>
              <label>
                Signature
                <input name="signature" value={form.signature} onChange={updateField} />
              </label>
            </div>
            <label>
              Dateline
              <input name="dateline" value={form.dateline} onChange={updateField} />
            </label>
          </div>

          <label className="writer-body-label" htmlFor="essay-body">
            Essay Markdown
            <span>
              Use &gt; for pulls; &gt; **EDITORIAL NOTE:** for notes; &gt; **EDIT NEEDED:** to flag revisions; --- for section breaks; ### for section titles; - for stacked lists; and{' '}
              <code>{IMAGE_SYNTAX_HELP}</code>{' '}
              for images. Available image modifiers are border, wide, compact, and dark. Put an italic paragraph immediately after an image to use it as a caption.
            </span>
          </label>
          <textarea
            id="essay-body"
            className="writer-body"
            name="body"
            value={form.body}
            onChange={updateField}
            spellCheck="true"
            placeholder="Begin writing…"
          />

          <details className="writer-publish">
            <summary>Publish to production</summary>
            <p>This commits the Markdown file to the configured GitHub branch. Vercel will deploy it automatically.</p>
            <label>
              Publishing password
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
            </label>
            {publication.error && (
              <p className="writer-publish-validation">{publication.error}</p>
            )}
            <button type="button" className="writer-publish-button" onClick={publish} disabled={isPublishing || !publication.essay}>
              {isPublishing ? 'Publishing…' : 'Publish now'}
            </button>
          </details>
        </section>

        <aside className="writer-preview-pane" aria-label="Live essay preview">
          {preview.error && <div className="writer-error">{preview.error}</div>}
          <WriterPreview essay={preview.essay} />
        </aside>
      </div>

      {fullPreview && preview.essay && (
        <div className="writer-full-preview">
          <button type="button" className="writer-close-preview" onClick={() => setFullPreview(false)}>Close preview</button>
          <WriterPreview essay={preview.essay} compact={false} />
        </div>
      )}
    </main>
  );
}
