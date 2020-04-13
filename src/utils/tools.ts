/**
 * @author: lencx
 * @create_at: Jan 20, 2020
 */

import dayjs from 'dayjs';

export const dateFormat = (date: Date, format = '') =>
  dayjs(date).format('YYYY-MM-DD' || format);

export const getScrollPosition = (el: any = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

export const createScript = ({
  id,
  script = '',
  src,
  async = false,
  type = 'text/javascript',
}: {
  id?: string;
  script?: string;
  src?: string;
  async?: boolean;
  type?: string;
}) => {
  const win: any = window;
  const scriptEl = document.createElement('script');
  const keyCache = win.__SCRIPT_KEY__ || [];
  scriptEl.async = async;
  scriptEl.text = script;
  scriptEl.type = type;
  if (src) {
    scriptEl.src = src;
  }
  if (!keyCache.includes(id)) {
    document.head.appendChild(scriptEl);
    if (id) {
      scriptEl.id = id;
      win.__SCRIPT_KEY__ = [...keyCache, id];
    }
  }
};

export function pointerCoord(event: any) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    const changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    const pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

/**
 * changeCss
 * @param className element tag or class
 * @param classValue css
 * @example
 * changeCss('@media(max-width: 768px){.body', 'color: red;');
 * changeCss('body > .navbar', 'background: green; color: blue;');
 */
export function changeCss(className: string, classValue: string) {
  let styleEl: any = document.querySelector(`style[data-class="${className}"]`);
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.setAttribute('data-class', className);

    // Append style element to head
    document.head.appendChild(styleEl);
  }

  // Grab style sheet
  const styleSheet = styleEl.sheet;
  const rules = styleSheet.cssRules || styleSheet.rules;
  const style = classValue.substr(0, classValue.indexOf(':'));
  const value = classValue
    .substr(classValue.indexOf(':') + 1)
    .replace(/!important[;]/g, '');
  const priority = classValue.match(/!important/) ? 'important' : null;

  for (let i = 0; i < rules.length; i++) {
    if (rules[i].selectorText === className) {
      rules[i].style.setProperty(style, value, priority);
      return;
    }
  }

  let mediaQuery = '';
  if (className.indexOf('@media') >= 0) {
    mediaQuery = '}';
  }
  try {
    styleSheet.insertRule(
      className + '{' + classValue + '}' + mediaQuery,
      styleSheet.cssRules.length
    );
  } catch (e) {
    // eslint-disable-line no-console
    console.error(e);
  }
}

// WebpackError: ReferenceError: window is not defined
export const isWin = typeof window !== `undefined`;
