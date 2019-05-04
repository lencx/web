export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  const txt = `<i>${minutes} min read</i>`;
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('<b>🍱</b>')
      .join('')} ${txt}`;
  } else {
    return `${new Array(cups || 1).fill('<b>☕️</b>').join('')} ${txt}`;
  }
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}