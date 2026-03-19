const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs/guide');
const outputFile = path.join(__dirname, '../docs/public/docs-index.json');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const mdFiles = walk(docsDir);
const chunks = [];

mdFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  let currentHeading = '';
  let currentContent = [];

  // Very basic chunking by Markdown headings
  lines.forEach(line => {
    if (line.startsWith('#')) {
      if (currentHeading || currentContent.length > 0) {
        chunks.push({
          heading: currentHeading || path.basename(file),
          content: currentContent.join('\n').trim()
        });
      }
      currentHeading = line.replace(/^#+\s*/, '').trim();
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  });

  if (currentHeading || currentContent.length > 0) {
    chunks.push({
      heading: currentHeading || path.basename(file),
      content: currentContent.join('\n').trim()
    });
  }
});

// Remove empty chunks and too short chunks
const validChunks = chunks.filter(c => c.content.length > 20);

const publicDir = path.dirname(outputFile);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(validChunks, null, 2));
console.log(`Generated docs index with ${validChunks.length} chunks.`);
