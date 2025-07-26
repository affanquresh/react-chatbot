export function checkHeading(str) {
    // Remove whitespace and newlines from start/end before testing
    const s = str.trim();
    // Check for **Heading:** pattern
    const boldPattern = /^\*\*.*?:\*\*$/.test(s);
    // Check for *Heading:* pattern
    const italicPattern = /^\*.*?:\*$/.test(s);
    // Check for Heading: pattern
    const simplePattern = /^[A-Z][a-zA-Z\s]+:$/m.test(s);
    
    return boldPattern || italicPattern || simplePattern;
}

export function replaceHeading(str) {
  // Remove ** or * from the start and end, and trim whitespace/newlines
  return str.replace(/^\s*\*+\s*|\s*\*+\s*$/g, '').trim();
}

export function formatBoldText(str) {
  // Match all occurrences ending with :**
  const regex = /([^*]+:\*\*)/g;
  const parts = str.split(regex);
  return parts.map(part => {
    const trimmed = part.trim();
    if (/^[^*]+:\*\*$/.test(trimmed)) {
      // Remove the trailing **
      return { text: trimmed.slice(0, -2).trim(), isBold: true };
    }
    return { text: part, isBold: false };
  });
}

export function removeSurroundingDoubleAsterisks(str) {
  // Remove only leading double asterisks and any whitespace before them
  return str.replace(/^\s*\*\*/, '');
}