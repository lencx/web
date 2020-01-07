---
title: Flutter
date: 2019-12-15
type: technology
category: flutter
spoiler:
tags: [flutter]
# readtime:
---

* [Flutter-EN](https://flutter.io/)
* [Flutter-CN](https://flutter.cn)

---

* [Flutter SDK](https://flutter.dev/docs/get-started/install/macos)
* [Android Studio](https://developer.android.com/studio/index.html)

> Android Studio > Preferences > Plugins > Marketplace > Flutter

```bash
unzip ~/Downloads/flutter_macos_v1.12.13+hotfix.5-stable.zip

# Add the flutter tool to your path:
export PATH="$PATH:`pwd`/flutter/bin"

# Run the following command to see if there are any dependencies you need to install to complete the setup
flutter doctor

# Android licenses
flutter doctor --android-licenses

# install cocoaPods
sudo gem install cocoapods
```

```bash
# .zshrc or .bashrc

# flutter
export PATH="$PATH:~/flutter/bin"

# ~/flutter/bin
echo $PATH

# /Users/<USER_ROOT>/flutter/bin/flutter
which flutter

flutter upgrade
```

## iOS setup

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer

sudo xcodebuild -runFirstLaunch

sudo xcodebuild -license

# find the Simulator via Spotlight
open -a Simulator
```

## Create Project

```bash
flutter create <app_name>

cd <app_name>

flutter run
```

## FAQ

```bash
# https://stackoverflow.com/questions/51679269/waiting-for-another-flutter-command-to-release-the-startup-lock
# Waiting for another flutter command to release the startup lock...
killall -9 dart

rm <YOUR_FLUTTER_PATH>/flutter/bin/cache/lockfile
```

```bash
# https://flutter.dev/community/china
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn

git clone -b dev https://github.com/flutter/flutter.git

export PATH="$PWD/flutter/bin:$PATH"
cd ./flutter
flutter doctor
```