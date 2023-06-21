'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "db27b94e563bd511acac95db84e540b8",
".git/config": "0b62f44a69a7c54a11d0714ed0217cfd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9801a7a434aa2dc19cc3184bcda4e047",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f0ef85f192c9219239a7a8f2c2dacf02",
".git/logs/refs/heads/main": "62c09ea260c9b4390bd415e69e99884e",
".git/logs/refs/remotes/origin/main": "6a27e9e9e2ef3dce8de37c097c917709",
".git/objects/01/3389ca17a43647cf046f9e2cf49d3f87694864": "46ac4fb1cf4eed87359a416b983476f1",
".git/objects/07/71a6b0ef1c3ad7375bda93b2b60c7a90fd269b": "73ff0f39c627ffb3d50383723d801181",
".git/objects/08/cdeef77eaad97ea912a4f98c254ddfaddb59db": "0c388d0e23ed08c851a51f50890c15b0",
".git/objects/09/d7926ae26241e9f491eb0bfdf029090d5935d6": "1faccb20af7f11881255d1108f6c790d",
".git/objects/0b/f539d526b54622dfbd516ac4fe85f079959f1c": "690d737c90d24b12b4c936ba149dcf8e",
".git/objects/11/3112595011298033999dcda4fba069d22ae427": "7cae949510180b72c457eb08639ccd77",
".git/objects/18/7097b6d65cfde7497bb5cb89e23afa8c2e58c3": "c2f6ea7e8ec366e1b8b9123148f18503",
".git/objects/19/8276cadafc8b0afa3a0f2108d041d443a40a1e": "34c3e4a966c347fa22fff0091cc62e4d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/f580b1fd82fe828a0eb01dd386556d227be7c2": "da23536643893520b338a96d23767c24",
".git/objects/23/82d36b18888d7bb0868751b4bc70785f24830c": "97d95a2d427e53300724a4235020c8a9",
".git/objects/24/8c000f9d69d0a39d1dc618f19b87b8216b3d62": "2830058416c3b59779bd57ed84a51c28",
".git/objects/26/aec4585b155f65f498c6146fadc2844946ba67": "8964b93bff7c358974654231530f6ad5",
".git/objects/29/35448e0d70a6b67c188d5c5a4ce65c65843c26": "3528d968245b6c49bf27c1ae47843801",
".git/objects/2a/e02f7a2f1e3a89340ada8cd8085cd917b04ed2": "a08ce894fed9fa592000c967376f7782",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/ab488429ba9c093eef9170fb0c71a13677447b": "003386e907713dc9dd8aee9281e9d21b",
".git/objects/37/4c391ce34f01d303acd6bfd05aedce412646cd": "a6ed560fe920a3a6129288b8da435feb",
".git/objects/37/5c6dba5ad8f54b21fc6ec93f24cfd1ff135d31": "7fbcb3c8ce15d98b4a9e40a9d2ad2ffe",
".git/objects/37/c715458e2e36117d7fa40a6fc6f54a23287b7f": "0c598bc8aedb46566b33ce8033563d20",
".git/objects/3b/c6632c603494c0f54663dd6323bfd6952a3092": "05977495ea19ec22c168a92e766d923c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/47/e7bc88edb3ad3ca0200e1d28e2a78cdaca42b8": "bfa439df76f6be36b10588103af815f1",
".git/objects/61/ae5cc80272778224e909b318fdcbb35b9cddf8": "e5d81a631eb2db734fb5c4e7f6e2ab4e",
".git/objects/6f/c19ac2f51b5af28bc1571c4001923f8c368831": "cd736e1e548c94847aef9784744995ec",
".git/objects/72/840dc17b9a56556b762679bbb3281a331d92b8": "88bb53ae4331deebc4c5d5051f5e889d",
".git/objects/77/a4047a41b6118b3d3c7ce1873e3c6b09052101": "0a7635ee0668d56a2bd336f58366d157",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/d782f2468b5d6c46b7135a96cef32e6d5e30d7": "c8c2af5e8fd874f22dd069960e79b419",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1dccf305c307d931489ed8d07cc49ceb213981": "61d354b15487378b882e6becba1f4070",
".git/objects/8f/6df500c2806d74661860f0d07aca4b49e520d6": "1744bd1ce04e2fc1672197a8d5c601e5",
".git/objects/92/284b7e645e5bf50877a59599383cc63a90d9a2": "a33e2f4baa0b96b827d54e475f666304",
".git/objects/93/cbd09985b240b58473cc95be383c6226a873d6": "59aa0a2a45f5fbd4f9f4444df5fb9e29",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/0cf186c3b1e0b1c0a80c6eb2fc89294b123ded": "23a2c99f49a80a45d5c304fe6d09b598",
".git/objects/9e/92aefd9d67d245d6b00df91dcb30cf0b7f51a6": "ab760b4e532fb748a4c1ed0c3c65f33c",
".git/objects/a0/05800d1efb7737441b9f70e34c1935473320c9": "089415b4875bdb1fdbfaffcc8d12dd53",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/8889d55c68b3a62d464be217b85b65909e67d9": "e433c4019303ba23c20aee4422725e1a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ba454a1091de3d5cff7acaec7a25f2d38db7f9": "048f7f059720b5d605f2d5964a030a14",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/cb/1e74f994acdd805eb8aeec0a8f8322e48ff3e7": "846c061b6e67f3e3523e5c432e03502e",
".git/objects/cb/8e9a9fd012a8e0a29576e39afeb7498f7ac2e7": "f514622cb8f43a85c701c91bb8c1eaa0",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/b7dec70d5d97fb1756926d04f01bbc480db809": "e77043a4201b4ae07bd985ad5d6393f0",
".git/objects/ce/69c03966c6d01b6e2486d6453ede0c7b944960": "767b2342e83a094289cd98725b682a1b",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d4/fefce22daf855d2fcdb547bd60342f78eb4eaf": "0086253ea88a91fc495bedc0c2fc9803",
".git/objects/d5/584ea84a8c8838bdb8c0254061533a1b07432d": "82dd0991fe2f5916cb05222643f307e5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/3c7850342e79d639bfdc1b8adafa998b4c5402": "c2851ec2d852c8c208ddd2ea6bf3f20d",
".git/objects/d8/c5efcc94094616c5f491b901a721e04136249a": "d907fced59d83ca1d5b1cc7206fef987",
".git/objects/d9/d819f4ca7181c837180db4dbf9b1e117a83200": "6a323d8b73e548078da7b88b8be322a9",
".git/objects/d9/fa6ce59fa95aaf386e24d5fbff8604050c23e3": "56a9ac236952afc2c62780297f20e590",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/79313351a992dc5c4239a115234c22897c1db5": "e8c862bc126e9fb7511ec59fee2458f9",
".git/objects/eb/174c49e7c376872cde6dfeb77bdd3e13b0176b": "e38f24b2114857da3c570b7412ebb7d9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/48c13efc66acce7ccdbfdbb8de523a249cec4c": "256c913b1278af855000a6f28f79b99d",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/refs/heads/main": "bca6b352847bbbbae64cf2a08f9fe88a",
".git/refs/remotes/origin/main": "bca6b352847bbbbae64cf2a08f9fe88a",
"assets/AssetManifest.bin": "166b43b5668476ab57cbdb10777ace43",
"assets/AssetManifest.json": "2f9cde06dade783e877cd8ee5676fc1b",
"assets/FontManifest.json": "825a1d852065a53950826420e2c1a0d7",
"assets/fonts/MaterialIcons-Regular.otf": "dd283ceaec955d8585c030762ae9cde3",
"assets/fonts/Metrophobic-Regular.ttf": "200a33651a0f3e89b49c34973243380e",
"assets/images/akrep8.png": "d8f6319083e99b13552f728df25b5f36",
"assets/images/akrep_B8.jpg": "49feeb756411b36ba831704827d053d2",
"assets/images/arkaplan1.png": "3330c719e251a435512146c2be45cda8",
"assets/images/arkaplan2.png": "3effd102be33f7233e3ffe20f120d7ad",
"assets/images/arkaplan4.png": "9418eb9e93e94667ba480ec248812960",
"assets/images/arkaplan5.png": "aa152d79dfd3c2a2de0a7360c96410eb",
"assets/images/arti.png": "18eb8258fc0474b368248a54414a24af",
"assets/images/aslan5.png": "39786fd1f89e8cb6ddf378102ee7242a",
"assets/images/aslan_B5.jpg": "59e4c79f865c6d50d0c98233b36290b9",
"assets/images/balik12.png": "218477e25fda6910755a953c358da072",
"assets/images/balik_B12.jpg": "c1181d9c8c76400f6855c045a947eb48",
"assets/images/basak6.png": "b4316478ae6f8e5c3711497cdbe40c97",
"assets/images/basak_B6.jpg": "e5dcb8435926a969604a9c80fb65a060",
"assets/images/boga2.png": "34a3b1c824c47e9cb8ff91b4c7c0b03b",
"assets/images/boga_B2.jpg": "423bd9940e2b407522d67750a15723fe",
"assets/images/bulutlu.png": "3a66de417cc037aeeb3287c14c98e3a5",
"assets/images/erkek1.png": "76aecd20ddd89edca01bf4e9d64781aa",
"assets/images/evrak.png": "03e2c85471ffafc36b8cb28443d72fa7",
"assets/images/f.png": "c08b698bb2fb9ad5c259940b6483f93e",
"assets/images/galaksi4.jpg": "e431e34b8ff8b8f1be01f64dd5318987",
"assets/images/gece.png": "84545c28ebd3cf4593cf57bf95702686",
"assets/images/google.png": "f2aae79b0580a7a0ba8be12d0e86031d",
"assets/images/gunes.png": "7d32f2e5e1435c0a6d5a772b7ecd7d18",
"assets/images/ikizler3.png": "8045c2c87eb3348264e59590b3b8c08b",
"assets/images/ikizler_B3.jpg": "a1bdeefb4966850285b99d06994f45b7",
"assets/images/iliski.png": "c327a9252ff81818c65d3e0d5effd113",
"assets/images/kadin.png": "c742873ad0aef931b51992bdf67d1edb",
"assets/images/kalp.png": "815c763a9d59bce158845ad27141b549",
"assets/images/koc1.png": "5916fce8bb85269ca9713aadfa2917ae",
"assets/images/koc_B1.jpg": "56d0b479e2c8c2e04b008d6c284f05e6",
"assets/images/kova11.png": "2e743f7220b195ffb425bc353a50742f",
"assets/images/kova_B11.jpg": "376ae4531a7ac1129ae6696c69362993",
"assets/images/oglak10.png": "837147c146db71e6d3fb2d4c457ad5bf",
"assets/images/oglak_B10.jpg": "74e6085ab24c5dab232ac4ecbd322b32",
"assets/images/snow.png": "ea59fdc60e60d62cc77e3366b525f4c9",
"assets/images/terazi7.png": "248cc5f1b238c998d62f17edfaa6611a",
"assets/images/terazi_B7.jpg": "1887bf523452939191ca6d7f0424a844",
"assets/images/yagmur.png": "e80322acf61627722be40b8094489497",
"assets/images/yay9.png": "ba545cd785bc83bea103846fba4e2194",
"assets/images/yay_B9.jpg": "bbeea87aab4c40c527f5db30f27c45bc",
"assets/images/yengec4.png": "1c9193f9b044243e45b1dc4b9c8947cf",
"assets/images/yengec_B4.jpg": "4df30b393c62275a05de476c97ff2b8b",
"assets/NOTICES": "6b00aa48f2599f06be841320a76f5720",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2cefe336cf965b357560c2c9dfcc351e",
"/": "2cefe336cf965b357560c2c9dfcc351e",
"main.dart.js": "ef26b00f2cbac6633b3ded8df9bf0f74",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
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
