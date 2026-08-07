function parseScalar(value) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;

  return trimmed;
}

export function parseEssayDocument(source) {
  const normalized = source.replace(/\r\n?/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);

  if (!match) {
    throw new Error('Essay Markdown must begin with a front matter block.');
  }

  const data = {};
  const lines = match[1].split('\n');
  let activeListKey = null;

  for (const line of lines) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;

    const listItem = line.match(/^\s+-\s+(.+)$/);
    if (listItem && activeListKey) {
      data[activeListKey].push(parseScalar(listItem[1]));
      continue;
    }

    const property = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!property) throw new Error(`Invalid front matter line: ${line}`);

    const [, key, rawValue] = property;
    if (rawValue.trim()) {
      data[key] = parseScalar(rawValue);
      activeListKey = null;
    } else {
      data[key] = [];
      activeListKey = key;
    }
  }

  return { data, body: normalized.slice(match[0].length).trim() };
}

function parseBlock(block) {
  const lines = block
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const heading = lines.length === 1 && lines[0].match(/^###\s+(.+)$/);
  if (heading) return { text: heading[1].trim(), style: 'section-title' };

  const image =
    lines.length === 1 &&
    lines[0].match(
      /^!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']+)["'])?\)(?:\{([^}]+)\})?$/,
    );
  if (image) {
    const allowedModifiers = new Set(['border', 'wide', 'compact', 'dark']);
    const modifiers = (image[4] ?? '')
      .split(/\s+/)
      .map((modifier) => modifier.trim().toLowerCase())
      .filter((modifier) => allowedModifiers.has(modifier));

    if (modifiers.includes('compact')) {
      const wideIndex = modifiers.indexOf('wide');
      if (wideIndex >= 0) modifiers.splice(wideIndex, 1);
    }

    return {
      text: image[1].trim(),
      style: 'image',
      asset: {
        alt: image[1].trim(),
        src: image[2],
        title: image[3]?.trim(),
        modifiers,
      },
    };
  }

  const isPull = lines.every((line) => line.startsWith('>'));
  if (isPull) {
    const text = lines
      .map((line) => line.replace(/^>\s?/, ''))
      .join(' ')
      .trim();

    const editorialNote = text.match(
      /^\*\*(PERSONAL ANECDOTE NEEDED:|EDITORIAL NOTE:|NOTE:)\*\*\s*(.*)$/i,
    );
    if (editorialNote) {
      return {
        text: `${editorialNote[1]} ${editorialNote[2]}`.trim(),
        style: 'editorial-note',
      };
    }

    const editFlag = text.match(
      /^\*\*(EDIT NEEDED:|REVISION NEEDED:|TODO:)\*\*\s*(.*)$/i,
    );
    if (editFlag) {
      return {
        text: `${editFlag[1]} ${editFlag[2]}`.trim(),
        style: 'edit-flag',
      };
    }

    return { text, style: 'pull' };
  }

  const isStacked = lines.every((line) => /^[-*]\s+/.test(line));
  if (isStacked) {
    return {
      text: lines.map((line) => line.replace(/^[-*]\s+/, '')).join('\n'),
      style: 'stacked',
    };
  }

  return { text: lines.join(' '), style: undefined };
}

function parseSection(sectionSource, sectionIndex) {
  const blocks = sectionSource
    .trim()
    .split(/\n\s*\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map(parseBlock);

  const mergedBlocks = [];

  blocks.forEach((block) => {
    const previous = mergedBlocks[mergedBlocks.length - 1];
    if (previous?.style === 'image' && !block.style) {
      const caption = block.text.match(/^(?:\*([^*]+)\*|_([^_]+)_)$/);
      if (caption) {
        previous.asset.caption = (caption[1] ?? caption[2]).trim();
        return;
      }
    }

    mergedBlocks.push(block);
  });

  const styles = {};
  const assets = {};
  mergedBlocks.forEach((block, paragraphIndex) => {
    if (block.style) styles[paragraphIndex] = block.style;
    if (block.asset) assets[paragraphIndex] = block.asset;
  });

  return {
    id: `section-${sectionIndex + 1}`,
    paragraphs: mergedBlocks.map((block) => block.text),
    ...(Object.keys(styles).length > 0 ? { styles } : {}),
    ...(Object.keys(assets).length > 0 ? { assets } : {}),
  };
}

export function parseEssayMarkdown(source, filename = 'essay.md') {
  const { data, body } = parseEssayDocument(source);
  const requiredFields = ['slug', 'plainTitle', 'titleLines', 'subtitle'];

  for (const field of requiredFields) {
    if (!data[field] || (Array.isArray(data[field]) && data[field].length === 0)) {
      throw new Error(`${filename} is missing required front matter: ${field}`);
    }
  }

  const sections = body
    .split(/\n\s*---\s*\n/)
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  if (sections.length === 0) {
    throw new Error(`${filename} does not contain any essay content.`);
  }

  const status = String(data.status ?? 'draft').toLowerCase();
  const allowedStatuses = new Set(['published', 'draft', 'archived']);

  if (!allowedStatuses.has(status)) {
    throw new Error(
      `${filename} has invalid front matter status: ${data.status}. Use published, draft, or archived.`,
    );
  }

  if (status === 'published' && !data.publishedDate) {
    throw new Error(`${filename} is published but is missing publishedDate.`);
  }

  return { ...data, status, sections };
}
