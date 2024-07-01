'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4fe85833c4eb6ee5ee7783f2f9263a18",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "b7fbd5b27ae2100669d28f04f89e1eef",
"/": "b7fbd5b27ae2100669d28f04f89e1eef",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "3525a61b64544e66091230917fb7229f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "f03f64914dd3a6f992ae845b1315c427",
"assets/AssetManifest.bin": "c26154cb64499b93b6d6b32f642dc0fc",
"assets/fonts/MaterialIcons-Regular.otf": "ef2e2f0230724f0479643a6fdb98c3e8",
"assets/NOTICES": "858dfcf0290a4b4096326cfc8c45f48e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "1da9d667e56ffe3d3326954d41eeef30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/jsons/project.json": "2f5e6bf944de5192bee86af043110813",
"assets/assets/jsons/langs.json": "acc6f01bb02c14deb49542fdabb53196",
"assets/assets/jsons/certificates.json": "c60b517251ada20d0fce82bdc9137d5f",
"assets/assets/jsons/skills.json": "36249f0550bb5e5f73e5bc8a3e40b95f",
"assets/assets/jsons/home.json": "8793901bcaf48b4ca0e18f814be61ef0",
"assets/assets/lang/html_rmbg.png": "27795cc4e344c160c84edf204911fb54",
"assets/assets/lang/dart_rmbg.png": "eac4ede5c3d1b8aec6c32cabbdde7cf8",
"assets/assets/lang/js_rmbg.png": "37473299de8dad23c57924c6d328f3d9",
"assets/assets/lang/flutter_rmbg.png": "b159031103fed404a6842504e8689187",
"assets/assets/lang/python_rmbg.png": "8f8e60d68b88d3d8ae651d9f218d7feb",
"assets/assets/skills/filmoram_rmbg.png": "02c5b6501ffb3dc6322cc52e2d3599b5",
"assets/assets/skills/ae_rmbg.png": "d1f5d33e208b44037f5b68926551d06d",
"assets/assets/skills/excel_rmbg.png": "b1622c7d856f31f55b37cdaca9c2e7c6",
"assets/assets/skills/pp_rmbg.png": "29ecff6f6a296a1c6d67582933f5066a",
"assets/assets/skills/ps_rmbg.png": "8430a50f21269956dd38f5d19d25d29e",
"assets/assets/skills/git_rmbg.png": "e433b99d463a2e682b8e243cf5e8cf5c",
"assets/assets/skills/word_rmbg.png": "f031e22142f6c16ecdd55a9e4cd0d589",
"assets/assets/certificates/hackeRank.jpg": "b350803b0ca134850cc8c9c7a07b65cf",
"assets/assets/home/door.png": "3410cd667a1a9a7b16a928028042f20c",
"assets/assets/home/insan.png": "8a69d42c01037a0da24b638752a34bf4",
"assets/assets/home/projects_rmbg.png": "2c412904544496cb12778f14aa4b4599",
"assets/assets/home/LinkedIn.png": "fd1ff97d5fb3c0e37ac6a3563fe16420",
"assets/assets/home/experience_rmbg.png": "b0c27974bc8f2c28cadadd7f58ce68f7",
"assets/assets/home/about_rmbg.png": "0701cf5af0c535940ae5a684147798af",
"assets/assets/home/certificate.png": "5771a5d41bb9c98acc649ff67d00ae6c",
"assets/assets/home/coding.png": "844ecd2ffe39ae2b72d4700efc693170",
"assets/assets/home/GitHub.png": "8bdeed3b311c922c2e2c1741fec85c7c",
"assets/assets/home/skill_rmbg.png": "022f877c86c2e2af87252e5cbb9c9a89",
"assets/assets/home/shadow/projects.png": "9c0fd276a7aedd9acb6445778de4e526",
"assets/assets/home/shadow/experience.png": "2734201cfac123b260a12196c319ac97",
"assets/assets/home/shadow/skill.png": "e19d2529871d2813021c5cd8104babe6",
"assets/assets/home/shadow/certificate.png": "b27854b25f74190b817adba8cfaf8e16",
"assets/assets/home/shadow/coding.png": "820599b520a8a07f96c754dc6c675319",
"assets/assets/home/shadow/about.png": "03adc1474c01ad284e130636fecad010",
"assets/assets/platform/cmd.png": "9a30fd89e5de82c1503f3d98a7cdfa8c",
"assets/assets/platform/website.png": "810c27f0bc282e72015eb8ab300805b7",
"assets/assets/platform/android.png": "94afc05bc80529036c07708884925f33",
"assets/AssetManifest.bin.json": "fb84a91e9be7ec3a77451d53b2e01125",
"manifest.json": "7f69f83a63118df5890aa3f5772f9cb7",
"main.dart.js": "95ac96a764081f1bd5b0311b7fc2903b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
