'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4e3719e3fba08874fdbf938fff72b323",
"assets/FontManifest.json": "cdd7b885d81ba31558b51f5f38a72b4a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Metrophobic-Regular.ttf": "200a33651a0f3e89b49c34973243380e",
"assets/images/akrep8.png": "d8f6319083e99b13552f728df25b5f36",
"assets/images/akrep_B8.jpg": "49feeb756411b36ba831704827d053d2",
"assets/images/arkaplan1.png": "3330c719e251a435512146c2be45cda8",
"assets/images/arkaplan2.png": "3effd102be33f7233e3ffe20f120d7ad",
"assets/images/arkaplan4.png": "9418eb9e93e94667ba480ec248812960",
"assets/images/arkaplan5.png": "aa152d79dfd3c2a2de0a7360c96410eb",
"assets/images/arti.png": "18eb8258fc0474b368248a54414a24af",
"assets/images/aslan5.png": "a7a04efef8debf6d0f6d393c3e471621",
"assets/images/aslan_B5.jpg": "59e4c79f865c6d50d0c98233b36290b9",
"assets/images/balik12.png": "218477e25fda6910755a953c358da072",
"assets/images/balik_B12.jpg": "c1181d9c8c76400f6855c045a947eb48",
"assets/images/basak6.png": "b4316478ae6f8e5c3711497cdbe40c97",
"assets/images/basak_B6.jpg": "e5dcb8435926a969604a9c80fb65a060",
"assets/images/boga2.png": "34a3b1c824c47e9cb8ff91b4c7c0b03b",
"assets/images/boga_B2.jpg": "423bd9940e2b407522d67750a15723fe",
"assets/images/erkek.png": "33434885526481f360435566a2708fbb",
"assets/images/evrak.png": "03e2c85471ffafc36b8cb28443d72fa7",
"assets/images/f.png": "c08b698bb2fb9ad5c259940b6483f93e",
"assets/images/galaksi4.jpg": "e431e34b8ff8b8f1be01f64dd5318987",
"assets/images/google.png": "f2aae79b0580a7a0ba8be12d0e86031d",
"assets/images/ikizler3.png": "8045c2c87eb3348264e59590b3b8c08b",
"assets/images/ikizler_B3.jpg": "a1bdeefb4966850285b99d06994f45b7",
"assets/images/kadin.png": "c742873ad0aef931b51992bdf67d1edb",
"assets/images/kalp.png": "815c763a9d59bce158845ad27141b549",
"assets/images/koc1.png": "5916fce8bb85269ca9713aadfa2917ae",
"assets/images/koc_B1.jpg": "56d0b479e2c8c2e04b008d6c284f05e6",
"assets/images/kova11.png": "2e743f7220b195ffb425bc353a50742f",
"assets/images/kova_B11.jpg": "376ae4531a7ac1129ae6696c69362993",
"assets/images/oglak10.png": "837147c146db71e6d3fb2d4c457ad5bf",
"assets/images/oglak_B10.jpg": "74e6085ab24c5dab232ac4ecbd322b32",
"assets/images/terazi7.png": "248cc5f1b238c998d62f17edfaa6611a",
"assets/images/terazi_B7.jpg": "1887bf523452939191ca6d7f0424a844",
"assets/images/yay9.png": "ba545cd785bc83bea103846fba4e2194",
"assets/images/yay_B9.jpg": "bbeea87aab4c40c527f5db30f27c45bc",
"assets/images/yengec4.png": "1c9193f9b044243e45b1dc4b9c8947cf",
"assets/images/yengec_B4.jpg": "4df30b393c62275a05de476c97ff2b8b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b282489642774dc9c97deb4912590c8b",
"/": "b282489642774dc9c97deb4912590c8b",
"main.dart.js": "5c15ff7d1cc0861d9119d860f1449e8c",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
