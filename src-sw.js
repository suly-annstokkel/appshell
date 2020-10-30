importScripts(
    "https://storage.googleapis.com/workbox-cdm/releases/4.3.1/workbox-sw.js"
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
