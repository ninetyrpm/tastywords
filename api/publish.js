import crypto from 'node:crypto';

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(String(left ?? ''));
  const rightBuffer = Buffer.from(String(right ?? ''));
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function send(response, status, payload) {
  response.status(status).json(payload);
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return send(response, 405, { error: 'Method not allowed.' });
  }

  const {
    WRITER_PASSWORD,
    GITHUB_TOKEN,
    GITHUB_REPOSITORY,
    GITHUB_BRANCH = 'main',
  } = process.env;

  if (!WRITER_PASSWORD || !GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    return send(response, 500, {
      error: 'Publishing is not configured. Add WRITER_PASSWORD, GITHUB_TOKEN, and GITHUB_REPOSITORY in Vercel.',
    });
  }

  const { password, slug, source, title } = request.body ?? {};
  if (!safeEqual(password, WRITER_PASSWORD)) {
    return send(response, 401, { error: 'Incorrect publishing password.' });
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug ?? '')) {
    return send(response, 400, { error: 'Slug must contain lowercase letters, numbers, and hyphens only.' });
  }

  if (typeof source !== 'string' || source.length < 40 || source.length > 500000) {
    return send(response, 400, { error: 'Essay Markdown is missing or too large.' });
  }

  const path = `src/content/essays/${slug}.md`;
  const endpoint = `https://api.github.com/repos/${GITHUB_REPOSITORY}/contents/${path}`;
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'tastywords-writer',
  };

  let sha;
  const existing = await fetch(`${endpoint}?ref=${encodeURIComponent(GITHUB_BRANCH)}`, { headers });
  if (existing.ok) {
    const existingFile = await existing.json();
    sha = existingFile.sha;
  } else if (existing.status !== 404) {
    const details = await existing.text();
    return send(response, 502, { error: `GitHub lookup failed: ${details}` });
  }

  const commitMessage = sha
    ? `Update essay: ${title || slug}`
    : `Publish essay: ${title || slug}`;

  const githubResponse = await fetch(endpoint, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: commitMessage,
      content: Buffer.from(source, 'utf8').toString('base64'),
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  const result = await githubResponse.json();
  if (!githubResponse.ok) {
    return send(response, githubResponse.status, {
      error: result.message || 'GitHub rejected the publication.',
    });
  }

  return send(response, 200, {
    ok: true,
    commit: result.commit.sha,
    path,
  });
}
