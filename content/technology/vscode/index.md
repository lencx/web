---
title: Visual Studio Code
date: 2020-04-19
type: technology
category: IDE
spoiler:
tags:
# readtime:
---

## Extensions

### Commonly used

* ~~**Auto Close Tag**: Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text~~
* ~~**Auto Import**: Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX~~
* ~~**Auto Rename Tag**: Auto rename paired HTML/XML tag~~

  ```json
  // settings.json
  "editor.renameOnType": true,
  ```

* ~~**Beautify**: Beautify code in place for VS Code~~
* **Better TOML**: Better TOML Language support
* `Bracket Pair Colorizer`: A customizable extension for colorizing matching brackets
* `change-case`: Quickly change the case (camelCase, CONSTANT_CASE, snake_case, etc) of the current selection or current word
* `Code Runner`: C, C++, Java, JavaScript, PHP, Python, Perl, Perl 6, Ruby, Go, Lua, Groovy, PowerShell, BAT/CMD, BASH/SH, F# Script, F# (.NET Core), C# Script, C# (.NET Core), VBScript, TypeScript, CoffeeScript, Scala, Swift, Julia, Crystal, OCaml Script, R, AppleScript, Elixir, Visual Basic .NET, Clojure, Haxe, Objective-C, Rust, Racket, Scheme, AutoHotkey, AutoIt, Kotlin, Dart, Free Pascal, Haskell, Nim, D, Lisp, Kit, V, SCSS, Sass, CUDA, and custom command
* `Color Info`: Provides quick information about css colors
* **crates**: Helps Rust developers managing dependencies with Cargo.toml. Only works with dependencies from crates.io.
* **Dart**: Dart language support and debugger for Visual Studio Code.
* `Dash`: Dash, Zeal and Velocity integration in Visual Studio Code
* **Debugger for Chrome**: Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.
* **Docker**: Makes it easy to create, manage, and debug containerized applications.
* **DotENV**: Support for dotenv file syntax
* **ES7 React/Redux/GraphQL/React-Native snippets**: Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax
* **ESLint**: Integrates ESLint JavaScript into VS Code.
* `filesize`: Show the current file size in the status bar
* **Flutter**: Flutter support and debugger for Visual Studio Code.
* `GitLens — Git supercharged`: Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more
* **Go**: Rich Go language support for Visual Studio Code
* **GraphQL for VSCode**: GraphQL syntax highlighting, linting, auto-complete, and more!
* **Highlight Matching Tag**: Highlights matching closing and opening tags
* **HTML CSS Support**: CSS support for HTML documents
* ~~**HTML Snippets**: Full HTML tags including HTML5 Snippets~~
* `Image preview`: Shows image preview in the gutter and on hover
* `indent-rainbow`: Makes indentation easier to read
* **Import Cost**: Display import/require package size in the editor
* **JavaScript (ES6) code snippets**: Code snippets for JavaScript in ES6 syntax
* `Live Share`: Real-time collaborative development from the comfort of your favorite tools.
* `Markdown All in One`: All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)
* **markdownlint**: Markdown linting and style checking for Visual Studio Code
* **MDX**: Provides syntax highlighting and bracket matching for MDX (JSX in Markdown) files.
* **MDX Preview**: MDX Preview
* ~~**Path Intellisense**: Visual Studio Code plugin that autocompletes filenames~~
* `Prettier - Code formatter`: Code formatter using prettier
* `Project Manager`: Easily switch between projects
* **ra-lsp**: An alternative rust language server to the RLS
* **Reactjs code snippets**: Code snippets for Reactjs development in ES6 syntax
* **Remote - SSH**: Open any folder on a remote machine using SSH and take advantage of VS Code's full feature set.
* `REST Client`: REST Client for Visual Studio Code
* **Rust**: Rust language integration for VSCode
* **Rust (rls)**: Rust language support - code completion, Intellisense, refactoring, reformatting, errors, snippets. A client for the Rust Language Server, built by the RLS team.
* **Sass**: Indented Sass syntax highlighting, autocomplete & snippets
* `Settings Sync`: Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.
* **SQL Server (mssql)**: Develop Microsoft SQL Server, Azure SQL Database and SQL Data Warehouse everywhere
* ~~**SVG Viewer**: SVG Viewer for Visual Studio Code.~~
* `SVG Preview`: Preview for Svg files
* **TabNine**: All-language autocompleter — TabNine uses machine learning to help you write code faster.
* **Terminal**: Terminal for Visual Studio Code
* **Terminal Tabs**: Adds tabs for each terminal process to the status bar
* ~~**TODO Highlight**: highlight TODOs, FIXMEs, and any keywords, annotations...~~
* `Todo Tree`: Show TODO, FIXME, etc. comment tags in a tree view
  - [used to set a different icon in the tree view](https://octicons.github.com)

  ```json
  // settings.json
  "todo-tree.general.tags": ["TODO:", "FIX:", "BUG:"],
  // "todo-tree.regex.regex": "((//|#|<!--|;|/\\*)\\s*($TAGS)|^\\s*- \\[ \\])",
  "todo-tree.highlights.defaultHighlight": {
      "gutterIcon": true
  },
  "todo-tree.highlights.customHighlight": {
      "TODO:": {
          "foreground": "#000",
          "background": "#ffbd2a",
          "iconColour": "#ffbd2a"
      },
      "FIX:": {
          "foreground": "#fff",
          "background": "#54b2ea",
          "icon": "pin",
          "iconColour": "#54b2ea"
      },
      "BUG:": {
          "foreground": "#fff",
          "background": "#eb4d9c",
          "icon": "zap",
          "iconColour": "#eb4d9c"
      },
  }
  ```

* ~~**TSLint**: TSLint support for Visual Studio Code~~
* `vscode-colorize`: A vscode extension to help visualize css colors in files.
* ~~**XML Tools**: XML Formatting, XQuery, and XPath Tools for Visual Studio Code~~

### Theme

* **Better Comments**: Improve your code commenting by annotating with alert, informational, TODOs, and more!
* **Cobalt2 Theme Official**: Official theme by Wes Bos.
* **Community Material Theme**: The official community maintained Material Theme with 'legacy' color schemes you love!
* `Material Icon Theme`: Material Design Icons for Visual Studio Code
* `Material Theme`: The most epic theme now for Visual Studio Code
* `Material Theme Icons`: Material Theme Icons, the most epic icons theme for Visual Studio Code and Material Theme.
* **Night Owl**: A VS Code theme for the night owls out there. Now introducing Light Owl theme for daytime usage. Decisions were based on meaningful contrast for reading comprehension and for optimal razzle dazzle. ✨
* `Shades of Purple`: 🦄 A professional theme suite with hand-picked & bold shades of purple for your VS Code editor and terminal apps. One of the excellent most downloaded and top rated VSCode Themes on the marketplace. Part of VSCode.pro course.
* `vscode-icons`: Icons for Visual Studio Code

## User Snippets

> Code -> Preferences -> User Snippets

```json
// (java|type)script(react)?.json
{
  "Line number printing": {
		"prefix": "ln",
		"body": [
			"console.log(`[$TM_LINE_NUMBER] $TM_FILENAME: `, $1);",
		],
		"description": "Log output to console"
	},
	"author & create_at": {
		"prefix": "ac",
		"body": [
			"/**",
			" * @author: lencx",
			" * @create_at: $CURRENT_MONTH_NAME_SHORT $CURRENT_DATE, $CURRENT_YEAR",
			" */",
			"",
			"$1"
		]
	},
}
```