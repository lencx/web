/**
 * @author: lencx
 * @create_at: Jan 30, 2020
 */

export function formatReadingTime(minutes: number) {
  if (minutes === -1) return `<b>🍺</b> <i>long min read</i>`;
  const cups = Math.round(minutes / 5);
  const txt = `<span>${minutes} min read</span>`;
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('<em>🍱</em>')
      .join('')} ${txt}`;
  } else {
    return `${new Array(cups || 1).fill('<em>☕️</em>').join('')} ${txt}`;
  }
}
