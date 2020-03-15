'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "b6f07cc3adc5b54967eca3f456e3110e",
"/index.html": "fc05f9c99868551723d35d80b9ed65f2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "96a0b4ae580dc68ca922121b8ce35155",
"/assets/LICENSE": "a713ade6ba713f843218a1fa23ed134a",
"/assets/assets/images/screen_fm_local.webp": "35fd6be627e46e3067162dd232574cf7",
"/assets/assets/images/clip_02.webp": "4bf283049aadae33e5f9c07befa6e0b0",
"/assets/assets/images/screen_sundial.webp": "f9932865edcf1c860322887bfc858fa0",
"/assets/assets/images/clip_01.webp": "644790f2bfce7f686ba3ea3e3c4b9f7c",
"/assets/assets/images/logo_flutter_h.webp": "211430bf4b657b167ad40506d6bc7d06",
"/assets/assets/images/screen_sundial.gif": "6c179c9d3abb432c6daa48c5c48b361f",
"/assets/assets/images/clip_login.webp": "aa66e3973a8c443f57c7824c82d1f14c",
"/assets/assets/images/fm_logo.webp": "07fa209506ca769c13b3075a02e598cd",
"/assets/assets/images/fm_demo.webp": "975137b7e42a80f71f7b7ae46fcf3602",
"/assets/assets/images/clip_04.webp": "9f1ff4be3c9988a5dde297521e869c99",
"/assets/assets/images/screen_fm_item.webp": "16c2905f32bed52fddec78e813c49548",
"/assets/assets/images/clip_03.webp": "e93680f0f1dd78a4173555946c342edb",
"/assets/assets/images/keep_demo.webp": "47fecbb75dfcc6552a607f57105ccc3e",
"/assets/assets/images/screen_fm_dash.webp": "d0721de991b5b6461e27a1eeb3208cd0",
"/assets/assets/images/fltkeep_logo.webp": "70aad80f40034b7afbad85b3e205abe8",
"/assets/assets/fonts/GoogleSans/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"/assets/assets/fonts/GoogleSans/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"/assets/assets/fonts/GoogleSans/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"/assets/assets/fonts/GoogleSans/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"/assets/assets/fonts/GoogleSansNoLiga/GoogleSansNoLiga-Regular.ttf": "81df059c867bc9a8cb5c47a788195566",
"/assets/assets/fonts/GoogleSansNoLiga/GoogleSansNoLiga-Bold.ttf": "ec79fdf35610cb4c62c66d30e8976234",
"/assets/assets/fonts/RobotoMono/RobotoMono-Regular.ttf": "a48ac41620cd818c5020d0f4302489ff",
"/assets/AssetManifest.json": "3c8901b9ed50171f8b53fa845d8f87ac"
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
