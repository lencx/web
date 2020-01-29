---
title: Gatsby FAQ
date: 2020-01-29
type: technology
category: js
spoiler: xxx
tags: [gatsby]
# readtime:
---

## FAQ

### [Testing Site with Gatsby Develop from Local LAN](https://github.com/gatsbyjs/gatsby/issues/5801)

```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "develop": "gatsby develop -H 0.0.0.0 -p 6300",
  }
}
```