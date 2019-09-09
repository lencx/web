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
* [starship](https://github.com/starship/starship)
  * `brew install starship`

## [Z](https://github.com/rupa/z) <small>-jump around</small>

> Tracks your most used directories, based on 'frecency'.
