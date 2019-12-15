---
title:  Visual Studio Code Tricks
date: 2019-12-02
type: technology
category: IDE
spoiler:  Visual Studio Code Tricks
tags: [tricks]
# readtime:
---

## [Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

> Create your own snippets

1. Code > Preferences > User Snippets(or `「Ctrl(Command) + Shift + P」`-> `snippet` -> `Preferences: Configure User Snippets`)
2. Select Snippets File or Create Snippets

```json
// javascript.json
{
  "Line number printing": {
    "prefix": "ln",
    "body": [
      "console.log(`[$TM_LINE_NUMBER] $TM_FILENAME: `, $1);",
    ],
    "description": "Log output to console"
  }
}
```