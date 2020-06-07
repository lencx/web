---
title: Deno
date: 2020-05-17
type: technology
category: js
spoiler: A secure runtime for JavaScript and TypeScript.
tags: [js, typescript]
# readtime:
---

* [Deno](https://deno.land)
* [Deno Chat Demo](https://github.com/lencx/dchat)

## [Install](https://deno.land/#installation)

```bash
# Shell(mac, linux)
curl -fsSL https://deno.land/x/install/install.sh | sh

# Chocolatey (Windows)
choco install deno
```

## Deno Features

* USe TypeScript or JavaScript
* Secure by Default
* De-centralized Packages
* Standard Library
* Modern JS
* ES Modules
* Top Level / First Class Await
* Built In Testing
* Browser Compatible API
* Execute Wasm Binaries

## Command

```bash
deno run -h
```

| Options        | Description                            |
| -------------- | -------------------------------------- |
| --allow-write  | Allow write access                     |
| --allow-read   | Allow read system access               |
| --allow-net    | Allow network access                   |
| --allow-env    | Allow environment access               |
| --allow-plugin | Allow loading plugins                  |
| --allow-run    | Allow running subprocesses             |
| --allow-hrtime | Allow high resolution time measurement |
| ...            | ...                                    |

## De-Centralized Packages

* No more NPM packages/package.json
* Packages are imported from a URL - `https://deno.land/x/`
* Cached to hard drive on load

```ts
import { Application } from 'https://deno.land/x/oak/mod.ts';
```

## Standard Library

* Extensive standard library for things like fs, datetime, http, etc

```ts
import { server } from 'https://deno.land/std/http/server.ts';
```
