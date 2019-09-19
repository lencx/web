---
title: Antd useTable
date: 2019-09-19
type: technology
category: js
spoiler: useTable is a react-hooks. When you want to use "Antd Table", you can use it.
tags: [react, js, antd, hooks]
readtime: 10
---

## useTable

> useTable is a react-hooks. When you want to use "Antd Table", you can use it.

```js
// useTable.js
import { useReducer, useEffect } from 'react';

export const formatQuery = ({ pagination, sorter, filters, ...other }) => {
  const query = { ...filters, ...other };
  if (pagination) {
    const { current, pageSize } = pagination;
    query.current = current;
    query.pageSize = pageSize;
  }
  if (sorter && sorter.field) {
    query.orderBy = sorter.field;
    query.order = sorter.order === 'ascend' ? 'asc' : 'desc';
  }
  return query;
};

export default (tabConf = {}) => {
  const {
    search,
    autoFirstFetch = true,
    defaultPageSize = 10,
    defaultCurrent = 1,
  } = tabConf;

  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    dataSource: [],
    pagination: {
      pageSize: defaultPageSize,
      current: defaultCurrent,
    },
    loading: false,
  })

  const requestData = async (params) => {
    setState({ loading: true });
    let result = await search(formatQuery(params));
    setState({ ...result, loading: false });
  }

  useEffect(() => {
    if (autoFirstFetch) {
      requestData(state.pagination);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (pagination, filters, sorter) => {
    let _params = {
      pagination,
      filters,
      sorter,
    };
    setState({ ...state, pagination: { ...state.pagination, ..._params } });
    requestData(_params);
  }

  const fetchTable = (params) => {
    requestData({ ...state.pagination, ...params })
  }

  const tableProps = {
    pagination: {
      pageSize: state.pagination.pageSize,
      current: state.pagination.current,
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['5', '10', '20', '50'],
      defaultPageSize,
      defaultCurrent,
      total: state.pagination.total,
    },
    loading: state.loading,
    dataSource: state.dataSource,
    onChange,
  }

  return { tableProps, fetchTable };
}
```

## Use useTable

```js
// --snip--
const { tableProps, fetchTable } = useTable({
  autoFirstFetch: false, // default: true
  async search(params) { // fetch table data
    const { current, pageSize, ...other } = params;

    let requestData = await new Promise(); // request

    // table props
    return {
      dataSource: requestData.data, // list
      pagination: {
        ...other, // useTable pagination
        pageSize: requestData.pageSize,
        total: requestData.total,
        current: requestData.currentPage
      }
    }
});
// --snip--
```

<iframe src="https://codesandbox.io/embed/amazing-grothendieck-vgs9s?codemirror=1&eslint=1&fontsize=14" title="lencx-antd-useTable" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>