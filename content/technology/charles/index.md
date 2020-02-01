---
title: Charles
date: 2020-01-03
type: technology
category: Charles
spoiler:
tags: [proxy]
# readtime:
---

[Charles](https://www.charlesproxy.com/)

## FAQ

```bash
# Charles cannot configure your proxy settings while it is on a read-only volume.
# Perhaps you are running Charles from the disk image?
# If so, please copy Charles to the Applications folder and run it again.
# Otherwise please ensure that Charles is running on a volume that is read-write and try again.
sudo chown -R root "/Applications/Charles.app/Contents/Resources"
sudo chmod -R u+s "/Applications/Charles.app/Contents/Resources"
```