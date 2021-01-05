import { useEffect, useRef } from 'react';

export default function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useRef<Function>();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/** Usage
const [delay, setDelay] = useState(1000);
const [isRunning, setIsRunning] = useState(true);

useInterval(() => {
  setCount(count + 1);
}, isRunning ? delay : null);
*/