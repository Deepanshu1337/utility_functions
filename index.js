
//  truncate text by characters including spaces
function truncateTextByCharacters(text, charLimit = 50) {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + '...';
    }
    return text;
  }