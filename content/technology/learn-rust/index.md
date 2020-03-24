---
title: Learn Rust
date: 2020-03-24
type: technology
category: rust
spoiler: A language empowering everyone to build reliable and efficient software.
tags:
# readtime:
---

## Getting Started

### Install

```bash
# macOS, Linux, or another Unix-like OS
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

source $HOME/.cargo/env

# ~/.bash_profile or ~/.zshrc
export PATH="$HOME/.cargo/bin:$PATH"
```

### Updating and Uninstalling

```bash
rustup update

rustup self uninstall

rustc --version
```

### Rust Nightly

> There are three release channels for Rust
> * Nightly
> * Beta
> * Stable

```bash
rustup install nightly

rustup toolchain list
# stable-x86_64-apple-darwin
# nightly-2019-08-22-x86_64-apple-darwin
# nightly-x86_64-apple-darwin (default)

# use `nightly` in the current project
rustup override set nightly
```

## Crates

### Mirrors(China)

```bash
# $HOME/.cargo/config
# https://crates.io
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'
[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
```