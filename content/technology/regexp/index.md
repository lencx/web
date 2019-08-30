---
title: RegExp
date: 2019-08-30
type: technology
spoiler: RegExp
category: regexp
tags: [regexp]
---

## JavaScript

```js
// /^(```)(mode-[0-9a-zA-Z-_\S]+)(\n)([\s\S]*)(\n```)$/g
/^(```)(mode-[0-9a-zA-Z-_\S]+)(\n)([\s\S]*)(\n```)$/g.exec('```mode-chart\n{ code: 200, msg: "ok" }\n```')
```

```js
// 中文，英文(包含大小写)、数字、下划线、中划线和空格
const reg1 = str => /^[\u4e00-\u9fa5\w- ]{2,20}$/ig.test(str);

// 中文、英文(包含大小写)、数字、中划线，下划线、点、加号、斜线，反斜线和竖线
const reg2 = str => /^[\u4e00-\u9fa5-\w.+|\\/]+$/ig.test(str);

// 英文(包含大小写)、数字
const reg3 = str => /^[a-z0-9]+$/ig.test(str);

// 数字
const reg4 = num => /^[0-9]+$/ig.test(num);

// example: 1200 => 1,200
const numberFormat = num => (/^\d+$/.test(num) ? `${num}`.replace(/\B(?=(\d{3})+$)/g, ',') : '--');
```

## Email

```js
// js
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// w3c: <input type=”email” />
/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

```sql
-- MySQL
SELECT * FROM `users` WHERE `email` NOT REGEXP '^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$';
```

```bash
# grep
grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" filename.txt
```

```py
# python
r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
```

```java
// java
(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
```
