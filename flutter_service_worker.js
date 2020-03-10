'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/main.dart.js": "8039de6198e3c3304b5b67105bd4e8de",
"/index.html": "fc05f9c99868551723d35d80b9ed65f2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "96a0b4ae580dc68ca922121b8ce35155",
"/assets/LICENSE": "ed5954599bbb7461e11cdf2b257c43d2",
"/assets/assets/images/screen_fm_local.webp": "35fd6be627e46e3067162dd232574cf7",
"/assets/assets/images/screen_sundial.webp": "f9932865edcf1c860322887bfc858fa0",
"/assets/assets/images/logo_5miles.webp": "d02fc1319861e999b9ec884db518c544",
"/assets/assets/images/logo_flutter_h.webp": "211430bf4b657b167ad40506d6bc7d06",
"/assets/assets/images/screen_sundial.gif": "4a6c960a52460248220ed5579679c68d",
"/assets/assets/images/screen_fm_item.webp": "16c2905f32bed52fddec78e813c49548",
"/assets/assets/images/screen_fm_dash.webp": "d0721de991b5b6461e27a1eeb3208cd0",
"/assets/assets/fonts/GoogleSans/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"/assets/assets/fonts/GoogleSans/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"/assets/assets/fonts/GoogleSans/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"/assets/assets/fonts/GoogleSans/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"/assets/assets/fonts/GoogleSansNoLiga/GoogleSansNoLiga-Regular.ttf": "81df059c867bc9a8cb5c47a788195566",
"/assets/assets/fonts/GoogleSansNoLiga/GoogleSansNoLiga-Bold.ttf": "ec79fdf35610cb4c62c66d30e8976234",
"/assets/assets/fonts/RobotoMono/RobotoMono-Regular.ttf": "a48ac41620cd818c5020d0f4302489ff",
"/assets/AssetManifest.json": "e1545a5ab2fe104961be03f7301f8286"
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
