'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "16af5b591e3cf4f1a5690cd3da3b48d1",
"/index.html": "fc05f9c99868551723d35d80b9ed65f2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "96a0b4ae580dc68ca922121b8ce35155",
"/assets/LICENSE": "a713ade6ba713f843218a1fa23ed134a",
"/assets/assets/images/clip_02.jpg": "27e86f8c09711b9c9dff4d6d1e1acb3b",
"/assets/assets/images/clip_03.jpg": "b1377c3d3bd43f225ed6babfdaf09dea",
"/assets/assets/images/fm_logo.png": "c3b9adb2f2c9cdca54f55f986b1e29f0",
"/assets/assets/images/screen_sundial.gif": "6c179c9d3abb432c6daa48c5c48b361f",
"/assets/assets/images/logo_flutter_h.png": "7f9a455d22dbdf3dc50a689417c76120",
"/assets/assets/images/keep_demo.gif": "1c9cff3931cac09517aae34e6041a428",
"/assets/assets/images/clip_04.jpg": "0820e0f703bc9c5eb5f801c71feec7c8",
"/assets/assets/images/clip_01.jpg": "9929e24a004e06a4f58375b03154455c",
"/assets/assets/images/fltkeep_logo.png": "6f80f2eacb3efede8d907f1c120a4200",
"/assets/assets/images/fm_demo.gif": "2272ed33cb910f1f5f94e15a6ec54d0f",
"/assets/assets/images/clip_login.jpg": "78fad0957b346a0ca0755a2c9b00467d",
"/assets/assets/images/screen_sundial.jpg": "274e1d5e872f66fb1a08d82cc1119aad",
"/assets/assets/fonts/GoogleSans/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"/assets/assets/fonts/GoogleSans/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"/assets/assets/fonts/GoogleSans/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"/assets/assets/fonts/GoogleSans/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"/assets/assets/fonts/GoogleSansNoLiga/GoogleSansNoLiga-Regular.ttf": "81df059c867bc9a8cb5c47a788195566",
"/assets/assets/fonts/GoogleSansNoLiga/GoogleSansNoLiga-Bold.ttf": "ec79fdf35610cb4c62c66d30e8976234",
"/assets/assets/fonts/RobotoMono/RobotoMono-Regular.ttf": "a48ac41620cd818c5020d0f4302489ff",
"/assets/AssetManifest.json": "3b7d40a0ac2158e2260092b8d5d5de41"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
