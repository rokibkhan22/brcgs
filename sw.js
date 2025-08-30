// sw.js

self.addEventListener("install", event => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", event => {
  // Right now, just let the network handle all requests.
});