'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "19d6f2ecf570e674c82b624ff03d7b3a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f9f56015d6df49f3fa7007249166f1b6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"index.html": "0317654fe2367fde7cd6f11ed3c8f5ff",
"/": "0317654fe2367fde7cd6f11ed3c8f5ff",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "4f150f895a8b7689d05b3f4f63157c4b",
".git/FETCH_HEAD": "2ff0572c71d828631bf08a5961fc2e0f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "901129a2a98df5222c732adf03e654f7",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/ORIG_HEAD": "148d483e2fded2ea21e589dba7289e66",
".git/refs/remotes/origin/master": "70d2cc718c0950520241bbfab44e5b56",
".git/refs/heads/master": "70d2cc718c0950520241bbfab44e5b56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "93d95c31f5828ed7dab1f55c6d51c143",
".git/logs/refs/remotes/origin/master": "1d251992881ee7dd12fc6900bb037723",
".git/logs/refs/heads/master": "93d95c31f5828ed7dab1f55c6d51c143",
".git/objects/91/930dc9fb9faeba2e45f289da988d0b62a42b53": "bab1a45cc427ba7e9c8c903ab5bcae05",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/12/57e926a9bce7be26d7e37177780c07b06907bd": "43b531323c2687f0d097ac79064e54c6",
".git/objects/12/44331e0318d5144c5eab2861909abd31a99a5f": "f2eb7850df07e11636770841c2917f0d",
".git/objects/9f/350e1560f769a83b15c95b64d59d46f06c1177": "ed4ff920fc961659bbfb90b2813af0e9",
".git/objects/c4/c998cf23ebe01981a932c000c77414c5b73d24": "af3653f0ff3dcde1f98354e95bec8cbf",
".git/objects/e6/0b713008306a94453f3df215325cb0465e8d4c": "9e401f460d2bd2239996141e1b1d5704",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/7d/3bc94122182e7b09706fdb9e14ee097ef5de7e": "19f0a698d828ba233617c554be21cb4c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/28/d851052ac8190a0d53ea381b6ca8ae77f5aed7": "226d0da32e696c8f9ec0097190c0bc7b",
".git/objects/e5/de5bf959c42b8bd7223ad4519a00b8c37ba744": "058be15119398254f571e7656dcb8512",
".git/objects/6f/79f4bfd2eeef7e71c72753b995a3e2d77a919d": "a25f4ef043b2e0f1cebeff726a95c80d",
".git/objects/7f/5dbd1ed398eddaaa83ddbab05d2ab1a293f35b": "c7951e1decc3153956ba329be6479cca",
".git/objects/77/8c9c8c3e7eb6755d454f0dd90fbdaa8b630e86": "ed901b853a332bb70e102e1808194c64",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/99/b98d1db634b43d745f535c2a1fc9182ef7648c": "f5cc177789786438c24f7286f086b867",
".git/objects/83/beb1134d76ee29c621ae0e054faf80b1170330": "a88c32e9ce3ac122d10237b18b11d518",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/196bdfb93ce0be49d27bdff2d50b1dafe29dcd": "92396afd6c8d9017fbe333233f58599a",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/66/1513764613199876069cd3ca59036d61ed9c0a": "ca8301491941c8efd6ac0176cabed517",
".git/objects/2f/85a28617e6bac92152bfa724685054537d708d": "c6ac0ff5ee49d532579b95a9e0778e79",
".git/objects/a1/edda68aa60c485adfe13a06268767d6fd6f0ed": "33ab5a4c8a35a9719d823892d5454076",
".git/objects/fd/1d4763995372abedeed64e5120e61f4bc87314": "a7a220482a21ec192e27da2d65bc5c70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/06/7371d406f7b980bcb7ce4202a84cb202b2c5d8": "bdaf36f380d0462bdfe5634fa17fd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/b2f884bd7ec788c4e5b65958f18b5e69341fdf": "9eac1ceb34844c72a2abe05564e665ca",
".git/objects/b5/80e55c3c8aafdf0824b9e699df1b7dac4837b0": "5e4098a7fc3382f18aeb651e84328c1e",
".git/objects/29/9261ed1560b7ee18409d013968464dfee38426": "a000c72c2e5eddd104a5fd2a7ca6abfc",
".git/objects/1c/1c71d023b01393f198fc620b6281527b9b34aa": "735460e569698057e37996a0955e10dd",
".git/objects/93/2cbf8638a94cecbc9b8f2506031cf29dbf9fa5": "c5574a3e609df286fdd71cc8886926be",
".git/objects/8d/6418fc74eb01bccfcf3932c5ccafdf41e09dcb": "a8f76029f71a1df4a6fa99bbd79049bd",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/7460960c580d88ade5dc4d4ee0f1c59bc49a3a": "2dc62006886f663da6191e579433f2e7",
".git/objects/6a/cf5559faf37e884460cc607bd6e6d9ab3723f2": "0e1cde5d18fd5d67f071286c22bd035e",
".git/objects/af/93dce4cf77da066e06a4be570a5bae9c006296": "3e2241404ff3a81281ac510aee0fec5b",
".git/objects/49/54059c57f479a4b6064c707bfef0e780de6c18": "67fb0872df95f8543e0b293bc178526e",
".git/objects/2a/90dc21270ea1caef37e4de560eba163f8eaf5e": "8319e33669918751df5ed86e51652e77",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/aa/c13daece91d972772d256745dc60a5782e02f1": "e9e571bb71557b210301b0dbdfd94fe2",
".git/objects/8f/025ec733540cfe216515436abc971336041e35": "022689898f30c0234353e25cd29f2cd3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/0a/f585f9de07b9c02e396d328e2efe583c945460": "b0ecd4de37d951155a5e00be0f198c46",
".git/objects/7e/0c7e3f0f9eb1d8698a69fe1d8f8707bfa08928": "a807d9b1556a11e1250c891c76957b91",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/3f/7a235e8bb54a2d2b75c0252c74c379dfbc19b4": "ae4fe7be1ae1bbfec3a87acedcab7c70",
".git/objects/15/08114abf390b234433c52beba6ec5ee03a190d": "faa3834d4b0d53efeff0159b6b2a0f46",
".git/objects/26/0056ae349df6a1c96f51ac8bb23a876e9e71bd": "25e23d0814c0831b7042b8f735b5dc63",
".git/objects/01/ca77441b1b41cde2548e9c89f12d19e661cae9": "a4126d22c13738b426ac768bf295f815",
".git/objects/81/bc804ff06690409dd96a1b8e9c2d9a7e2827cc": "db23066007cd39437e06980c519e0dd4",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/a3/a1b78796f05c0fb699e13fbaf499b98d5d1f0b": "4e392321dc763720ac9e069028913580",
".git/objects/cb/e901ea6c05653e128b1ea1da07b913589dee87": "d5f2f98a2a5f936778fb7ea1c1575faa",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b9/c433c0465d56502761f3574c4656fcde50ff8a": "7f5d7c9bba80a21be21143b2df98f52d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/76/e36c752d0b6e303f6ba315789596e4fcf7a277": "30b9e3971adddfb5225b48f95f0094a9",
".git/objects/ba/7fc94740c9ea31129d0c0e618c618a294551e0": "85969c764819949c76e5cecf7c566b53",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ab/4c1e74ff7c798679ec9ba2e2a1571d932fde87": "64dae52b6dab313903e0531b1e888f4f",
".git/objects/ab/6bedfd2442eb44531041576000ed65cb424fa7": "d7449f085fbc16e6e34ccce72682595d",
".git/objects/22/69f362e3b858ae16b23a8e658a8ffbce820c2a": "b9d43f3c0b1eb68f0d11cf6fd57d1d62",
".git/objects/82/e501aaa1a9dd72685779091c430470f1762a05": "b13ab4b0cd3acd90edebe65ebf33ed1e",
".git/objects/39/4b142450313e12ab9fc35297f90aa5ab1b7f2b": "e20798804f99e5f8cec6f7ea13eea4c4",
".git/objects/f5/83dbbd2d90527d90fd62f8d3f9091fb68a4ed9": "b7b00676f96822128eef5ad925f2f806",
".git/objects/8a/6709e19975c3f6fb24b089f7cec599bb8ff7de": "826db1c5c8ce5e02b27073fa6b85bb10",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fbfaa579206ab0b053402ac3d5e3a2d4a7bda0": "753d0e3c5b92319a7a37870eabaf70a4",
".git/objects/78/abe16046a09ed599fd932aef3276d563f88f67": "67fe163da163c3ecb230dfa1fb43b8e9",
".git/objects/7b/c79dff42dd31ee72784ba2206e03c308038eb7": "92b04a9b6a1defe46e18fc9db0d0d3d7",
".git/objects/8c/27cb3eaed23379095ca3a9f20e41adc300765d": "e708e13ad87b8bd816c7244e63b57307",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/config": "93bb687daa59dad687df4717a8119f3f",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"version.json": "76d7dd5e63d0a9546bdafd76fbd936c5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "f1d2eda87b989d46ec845b7f01794343",
"manifest.json": "5164880e9ea7a1fc35c796a7da2098e1",
"main.dart.js": "eb99cf91d4b1a7cbc6292e6d09cf63f2"};
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
