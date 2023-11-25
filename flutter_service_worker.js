'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b128aba01931aac2650397668f166ea1",
"index.html": "400ed7d44274ca15b02025a70328c313",
"/": "400ed7d44274ca15b02025a70328c313",
"main.dart.js": "4673d021e966ff590a268889095ea617",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "457e9f20a62e28fb965b57bfb008187b",
"icons/Icon-192.png": "ab5ca2e43f3e3a6fd6dc2997e904c42a",
"icons/Icon-maskable-192.png": "ab5ca2e43f3e3a6fd6dc2997e904c42a",
"icons/Icon-maskable-512.png": "5fbd064317e0a1eb121a1279fc0ed2a7",
"icons/Icon-512.png": "5fbd064317e0a1eb121a1279fc0ed2a7",
"manifest.json": "32d7a98dfadd0b5594ff642f270dfaa4",
"assets/AssetManifest.json": "7ae24616360a19e0df80fc3f27812751",
"assets/NOTICES": "718208859040b6f701b669ba964ac167",
"assets/FontManifest.json": "4463634b6b684e836185d22563ce713f",
"assets/AssetManifest.bin.json": "46516d0c7028e835531709bdffcc893c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8397b808abf9d18665d2d7ef6cba2d19",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/assets/svg/ic_sub_admin.svg": "8eba98fb1163882781cadcbc1ec35235",
"assets/assets/svg/ic_filter.svg": "45fce11f681cd2d2746f2701659b9f5e",
"assets/assets/svg/ic_encrypt_key.svg": "ea5703ead556bab17031b3463d3b66b7",
"assets/assets/svg/ic_drawer_notification.svg": "5a184f30ce118abc9da3beb0bded421d",
"assets/assets/svg/reported_users.svg": "efb4e75d383cfbd18eb0d1d711db1923",
"assets/assets/svg/ic_community_post.svg": "c221b3ff6663dc8aca4a7c8e3d0ff8ee",
"assets/assets/svg/ic_notification.svg": "dffd9f8f32d257f7bd673d6d629d89ee",
"assets/assets/svg/ic_contact_us_message.svg": "29249fd728eebc6fd1679e5a3512a78f",
"assets/assets/svg/blocked_users.svg": "cca62411230aed01645786fdc3fb681b",
"assets/assets/svg/ic_explore_all.svg": "5c9e0ca5d40bb087710d13475b1f2625",
"assets/assets/svg/ic_select_tab.svg": "1c166d29764de668559419b12e296692",
"assets/assets/svg/ic_list_of_users.svg": "11e0dc666ba28f94f4a8a2ce962b4ca5",
"assets/assets/svg/ic_report_logs.svg": "3e6f59e5611ad97b216444d32e85e1a1",
"assets/assets/svg/total_users.svg": "d23257831b19d445b8dc46b9e01673b6",
"assets/assets/svg/app_logo.svg": "405df64b29837e3505e2746ef4a59b32",
"assets/assets/svg/auth_bg.svg": "dd779a5a9279054c26cd35c8b97c34ad",
"assets/assets/svg/ic_dashboard.svg": "daa8a84db3747ee180b2b5cf1fda1ddd",
"assets/assets/svg/ic_search.svg": "c632099dbc9ad1b2ba736e0fbecf1d9c",
"assets/assets/svg/ic_logout.svg": "4e4be4d69a490634b2ede31b564c2d1a",
"assets/assets/svg/ic_right_side_arrow.svg": "8d0c782ca5d306fe20c879f07e7dff7b",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/MochiyPopOne-Regular.ttf": "433e9e93b14e9266c7bde82d5aacda72",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
