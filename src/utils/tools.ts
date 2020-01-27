/**
 * @author: lencx
 * @create_at: Jan 20, 2020
 */

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
