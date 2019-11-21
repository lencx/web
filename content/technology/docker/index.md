---
title: Docker
date: 2019-11-22
type: technology
category: bash
spoiler: Docker installation, use and FAQ
tags:
# readtime:
---

## Debian install Docker

```bash
# 4.9.0-11-amd64
uname -r

sudo apt-get update

# apt use https
sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg2 \
  software-properties-common

# GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88
# pub   rsa4096 2017-02-22 [SCEA]
#       9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
# uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
# sub   rsa4096 2017-02-22 [S]

sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/debian \
  $(lsb_release -cs) \
  stable"

sudo apt-get update

sudo apt-get install docker-ce

# https://stackoverflow.com/questions/48957195/how-to-fix-docker-got-permission-denied-issue
# docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create: dial unix /var/run/docker.sock: connect: permission denied.
docker run hello-world

sudo chmod 666 /var/run/docker.sock
```
