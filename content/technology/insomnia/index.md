---
title: Insomnia
date: 2020-04-27
type: technology
category: awesome
spoiler:
tags:
# readtime:
---

import Video from '~post/video'

## Start

* [Download](https://github.com/Kong/insomnia)
* [JSONPath](https://goessner.net/articles/JsonPath)

## Usage

### Response filtering

```json
// response filtering
[
  {
    "countryRegion": "China",
    // ...,
  },
  {
    "countryRegion": "France",
    // ...,
  },
  // ...
]
```

```
$[?(@.countryRegion == 'China')]
```

<Video src="/technology/insomnia/data-filter.mp4" />