'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e5e37aa5123046e6c3e358cb503087d5",
"assets/AssetManifest.bin.json": "79a72ec119bfaba2270f752eaae7048f",
"assets/AssetManifest.json": "72eaa606cacc9d5630067866c33209fd",
"assets/assets/animations/contact_us.json": "7eb4289f799dfafe7a9f3d98c211c3b3",
"assets/assets/animations/google_logo.json": "6e2b8748ee07cba43f5f6262d15666bd",
"assets/assets/animations/loading_hands.json": "93cc8a057a539413f28b64337958aff1",
"assets/assets/animations/login_background_animation_desktop.json": "9c9d9943286f7ba0e23d3fc7a287266e",
"assets/assets/animations/login_background_animation_mobile.json": "bef7436fbe0f26dbce30b145f625287e",
"assets/assets/animations/mobile_loading.json": "09d3e8ef9e76c74b01f1f53b22177db6",
"assets/assets/animations/signup_animation.json": "b9ec3f5f388019bd69e930c8873a80b8",
"assets/assets/animations/wave_lines.json": "cdd4d4c5d5ae5cd92225275844b568d8",
"assets/assets/images/contact_img.png": "11b86855e01f920884e217e2806a5f56",
"assets/assets/images/google_logo.png": "bee6639d77602df007df8dc80ec87050",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "804e1371298fe8989a28ed410dc931b1",
"assets/NOTICES": "ada890f908ff348b3ad2d3640cbc25b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "db7d44333445a25a85b7704dc7de5cd8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5c884a01ad6abbd4a01e6af7cad6a6b5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ce6fbc9d804dc88152bf404699e7908b",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_angry.png": "39ff95cb505e7de942b8cff8288f057f",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_angry_disable.png": "0f16839adee48a6b8fb7ef70d806c849",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_angry_disable_dark.png": "ed4698614d15cb49e80afd0b7d6ca245",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_excellent.png": "9f1a00fdfcc735f1416bbd0138f1e3fc",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_excellent_disable.png": "40927a382e536b81a1f4b86507827411",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_excellent_disable_dark.png": "048f31eed594a5ba7892f2ff63734bc2",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_happy.png": "27d6af2a045ce9128efcf3ca95e9692d",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_happy_disable.png": "230e70e9f3cda43387a67091407f36f3",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_happy_disable_dark.png": "e8bbaff201c0ecd0e12cd5a934968f6a",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_neutral.png": "5cfe2c815c85599e28f1139c9937c0e2",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_neutral_disable.png": "d555f0295d3f1142705a91a0b2b15609",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_neutral_disable_dark.png": "39da30c68c0f7e3ee9b29f7dbccc8348",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_sad.png": "d867d0bd1b1a9eb7b361e2f0012bb60b",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_sad_disable.png": "c6d7327eec54dd6729401dc0fb97e2c5",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_sad_disable_dark.png": "508201b1d00af7c19c110e53194e51e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a3c61b46783660fe48073f8cf3d6edb2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b180a8d2ff9fac41fdfa6f3766c67e25",
"/": "b180a8d2ff9fac41fdfa6f3766c67e25",
"main.dart.js": "7b757ebf8c152e835ee5889766fe9caf",
"manifest.json": "6a424fbb7bd69978a0e02393de95ade4",
"version.json": "421afa127e12bf4adf57d3535a751913"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
