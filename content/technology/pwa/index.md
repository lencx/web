---
title: PWA
date: 2020-02-05
type: technology
category:
spoiler: Progressive Web Apps aren't just for mobile any more, they make it possible to deliver high quality, capable apps on Windows, Mac, Linux and Chrome OS.
tags:
# readtime:
---

```html
<!-- Web App Manifest - Credentials -->
<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
```

```json
// manifest.json
{
  "name": "",
  "statrt_url": "",
  "scope": "",
  "display": "",
  "background_color": "",
  "theme_color": "",
  "icons": [],
}
```

```js
// Service Worker - main.js
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(
      "/service-worker.js", { scope: "/" });
  });
}
```

```js
// Service Worker - service-worker.js
var CACHE_NAME = "cache-v1";

// install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // cache list
      return cache.addAll(["/offline.html"]);
    })
  );
});

// fetch
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match("offline.html");
      })
    })
  );
});
```

## [Use Workbox](https://workboxjs.org)

```js
// Using Workbox to wrap Service Workers
importScripts("/workbox-sw.js");
workbox.routing.registerRoute(
  // Cache CSS files, but update theme in the background.
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "css-cache",
  })
);
```

TODO: Workbox + WebAssembly

### Handling beforeinstallprompt

```js
var button = document.getElementById("installButton");
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  app.promptEvent = e;
  button.disabled = false;
  button.addEventListener("click", () => {
    app.promptEvent.prompt();
    app.promptEvent.userChoice.then(hadlePromptResponse);
  })
});
```

### Detecting installations

```js
window.addEventListener("appinstalled", (e) => {
  app.logEvent("installed");
});
```