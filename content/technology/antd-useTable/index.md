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

export default (tableConf = {}) => {
  const {
    search, // trigger request
    autoFirstFetch = true, // initial request
    defaultPageSize = 10,
    defaultCurrent = 1,
    paginationOptions = {},
  } = tableConf;

  const [state, setState] = useReducer((o, n) => ({...o, ...n}), {
    dataSource: [],
    pagination: {
      pageSize: defaultPageSize,
      current: defaultCurrent,
    },
    loading: false,
  })

  // fix: rest parameters - keep query parameters when paginating
  const requestData = async (params, ...args) => {
    setState({ loading: true });
    let result = await search(formatQuery(params), ...args);
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

  const fetchTable = (params, ...args) => {
    requestData({ pagination: state.pagination, ...params }, ...args)
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
      ...paginationOptions,
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
  paginationOptions: {
    // antd pagination
    pageSizeOptions: ['5', '10', '15'],
    // ...
  },
  autoFirstFetch: false, // default: true
  async search(params, ...args) { // fetch table data
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

<div style="max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch;">
  <iframe src="https://codesandbox.io/embed/lencx-antd-usetable-vgs9s?autoresize=1&fontsize=14&hidenavigation=1" title="lencx-antd-useTable" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
<div>