---
title: Awesome Terminal
date: 2019-08-15
category: terminal
spoiler: awesome command-line frameworks, toolkits, guides and gizmos.
tags: [terminal, bash, zsh, awesome]
# readtime:
---

## [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

```bash
### `~/.zshrc`

# theme
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="kafeitu"

# alias
alias zs="source ~/.zshrc"
alias cls="clear"
alias la="ls -a"
alias ll="ls -l"
alias ip="ipconfig getifaddr en0"
alias mkcd='foo(){ mkdir -p "$1"; cd "$1" }; foo'
# open vscode
code () {VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $*;}
alias v=code

# plugins
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  history-substring-search
)

# starship: https://github.com/starship/starship
eval "$(starship init zsh)"

source $ZSH/oh-my-zsh.sh
```

### zsh plugins

* [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
  * `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions`
* [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
  * `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting`
* [zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search)
  * `git clone https://github.com/zsh-users/zsh-history-substring-search ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-history-substring-search`

## [Z](https://github.com/rupa/z) <small>-jump around</small>

> Tracks your most used directories, based on 'frecency'.

## [navi](https://github.com/denisidoro/navi)

> An interactive cheatsheet tool for the command-line

```bash
# install
brew install denisidoro/tools/navi

# upgrade
brew update; brew reinstall navi
```

<!-- <video src="./cmd-use.mp4" style="max-width: 640px" controls="controls" loop autoplay></video> -->

## Rust(command-line)

* [ripgrep](https://github.com/BurntSushi/ripgrep) - recursively searches directories for a regex pattern
* [fd](https://github.com/sharkdp/fd) - a simple, fast and user-friendly alternative to `find`
* [starship](https://github.com/starship/starship) - the cross-shell prompt for astronauts
* [exa](https://github.com/ogham/exa) - is a replacement for `ls` written in Rust
* [lsd](https://github.com/Peltoche/lsd) - the next gen `ls` command
* [hexyl](https://github.com/sharkdp/hexyl) - a command-line hex viewer
* [xsv](https://github.com/BurntSushi/xsv) - a fast CSV command line toolkit written in Rust

```bash
brew install ripgrep fd starship exa
brew install lsd hexyl xsv
```
