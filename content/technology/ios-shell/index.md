---
title: ish-app/ish
date: 2020-06-03
type: technology
category: ios
spoiler: Linux shell for iOS
tags: [ios, bash]
# readtime:
---

* [iSH](https://github.com/ish-app/ish)

```bash
# Alpine
cat /etc/shells
# /bin/sh
# /bin/ash
# /bin/bash

# apk install
apk add git zsh openssh

# https://ohmyz.sh
# install oh-my-zsh
sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

# change default shell
vi /etc/passwd
# root:x:0:0:root:/root:/bin/ash
root:x:0:0:root:/root:/bin/zsh

# current shell
echo $SHELL
```