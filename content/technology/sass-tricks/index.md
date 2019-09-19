---
title: Sass Tricks
date: 2019-09-12
type: technology
category: css
spoiler: Sass Tricks
tags:
# readtime:
---

## Mixin

```scss
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

@mixin single-text($width) {
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: $width;
}

@mixin multi-text($width, $row) {
  max-width: $width;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $row;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
}
```

## Function

```scss
@function map-deep-get($map, $keys...) {
    @each $key in $keys {
        $map: map-get($map, $key);
    }
    @return $map;
}
```
