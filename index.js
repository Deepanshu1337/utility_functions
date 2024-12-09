
//  truncate text by characters including spaces
function truncateTextByCharacters(text, charLimit = 50) {
  if (text.length > charLimit) {
    return text.slice(0, charLimit) + '...';
  }
  return text;
}

// truncate by words
export function truncateTextByWords(text, wordLimit = 10) {
  const words = text.split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '...'
    : text;
}