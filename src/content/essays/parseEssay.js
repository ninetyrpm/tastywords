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

function parseFrontMatter(source) {
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

  const isPull = lines.every((line) => line.startsWith('>'));
  if (isPull) {
    const text = lines
      .map((line) => line.replace(/^>\s?/, ''))
      .join(' ')
      .trim();

    if (/^\*\*PERSONAL ANECDOTE NEEDED:/i.test(text)) {
      return {
        text: text.replace(/^\*\*(PERSONAL ANECDOTE NEEDED:)\**/i, '$1'),
        style: 'editorial-note',
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

  const styles = {};
  blocks.forEach((block, paragraphIndex) => {
    if (block.style) styles[paragraphIndex] = block.style;
  });

  return {
    id: `section-${sectionIndex + 1}`,
    paragraphs: blocks.map((block) => block.text),
    ...(Object.keys(styles).length > 0 ? { styles } : {}),
  };
}

export function parseEssayMarkdown(source, filename = 'essay.md') {
  const { data, body } = parseFrontMatter(source);
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

  return { ...data, sections };
}
