const fs = require('fs');
const path = require('path');

const contentPath = 'C:\\Users\\skulk\\.gemini\\antigravity\\brain\\3978f435-cc04-4e80-bfc8-3505ddb502af\\.system_generated\\steps\\227\\content.md';
const content = fs.readFileSync(contentPath, 'utf8');

// Simple parser to extract all headings and paragraphs
const cleanLines = [];
let match;

// We can just strip HTML tags and extract readable text, ignoring CSS and script blocks.
// Let's filter out head, style, script sections first.
let cleanHtml = content
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '');

// Now extract paragraphs, headers, list items
const regex = /<(h1|h2|h3|h4|h5|h6|p|li|span|a|div)[^>]*>([\s\S]*?)<\/\1>/gi;
const matches = [];

// A simpler way: strip all HTML tags, but keep text content.
// However, we want to keep structure (like headers and paragraphs).
// Let's replace headers and paragraphs with markdown-like formats.
cleanHtml = cleanHtml
  .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
  .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
  .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
  .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
  .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n')
  .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1')
  .replace(/<br\s*\/?>/gi, '\n');

// Strip all other HTML tags
let text = cleanHtml.replace(/<[^>]+>/g, '');

// Decode HTML entities
text = text
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#039;/g, "'")
  .replace(/&nbsp;/g, ' ');

// Clean up whitespace
const lines = text.split('\n')
  .map(line => line.trim())
  .filter(line => line.length > 0);

fs.writeFileSync(path.join(__dirname, 'clean_text.md'), lines.join('\n'));
console.log('Done! Cleaned text written to scratch/clean_text.md');
