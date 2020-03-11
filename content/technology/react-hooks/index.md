---
title: React Hooks
date: 2020-03-10
type: technology
category: hooks
spoiler: React hooks collection
tags: [js, react, hooks]
# readtime:
---

## React State

```js
/**
* Store
* @author lencx
* @param {object} - initial value
* @example
* const { state, set, get } = Store({ visible: true, form: {name: 'lencx', age: 27 }});
* set('form.name', 'Tom');
* set('visible', false);
* set({
*   visible: false,
*   'form.age': 20
* });
* get('form.name');
*/
import { useReducer } from 'react';
import _ from 'lodash';

export default function Store(initState = {}) {
  const [state, setState] = useReducer((o, n) => ({ ...o, ...n }), {
    ...initState,
  });
  const set = (prefix, data) => {
    let _data = _.cloneDeep(state);
    if (typeof prefix === 'string') {
      _.set(_data, prefix, data);
    }
    if (typeof prefix === 'object') {
      for (let key in prefix) {
        _.set(_data, key, prefix[key]);
      }
    }
    setState(_data);
    return _data;
  };
  const get = prefix => _.get(state, prefix);
  return { state, set, get };
}
```

## useInterval

```js
import { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
```