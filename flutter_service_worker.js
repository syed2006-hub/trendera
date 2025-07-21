'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3bfd8ebc8729ca98555eead5b1b8224a",
".git/config": "35811b1e0657ef35d0b9114785e3077d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "27056f7b39c917e8046ebb6c3a0296c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ebfd21df75d468f393e859538d6ec7a",
".git/logs/refs/heads/gh-pages": "8ebfd21df75d468f393e859538d6ec7a",
".git/logs/refs/remotes/origin/gh-pages": "c3d5ed0bd306d3e0f0becc24da8d2817",
".git/objects/03/2308d6f0b0413d2e560b6fef6a42186634f985": "f76a94a972db33b9bfffd032e764925c",
".git/objects/06/0e2bcb5de8b3425c10483cfdc00b1dab124cb0": "550715326a650de6d68ccf39a3098ffd",
".git/objects/09/1074c9d9e25e9c64cbf27805cdc7356e7dbbe9": "610ed0ff2d59afd9ec19ce989833bff1",
".git/objects/0f/25d2827528bc6f760ddfb9bd53fb2c2be71e35": "74526e6d5757e00dfc7da4b6cda1f31e",
".git/objects/16/b0c31716f78c15bccbc67282b2470d013b97c8": "54815a6e90b6aa98f32ee9cc48dde7f9",
".git/objects/16/e40830f44d02ab9f70994dae6041f4ebc4a2af": "4540422d9b6c63fe36103fa28c39b446",
".git/objects/19/ef91120bbd88f64ccfc4877c98e938411e1667": "2ca00b2c75df9722016a1f4eb4caa68e",
".git/objects/1b/4c2b820c5efaa042d64078c9dcdac6074db41f": "62fbaf3b23386d0863def3c7ee94c1fa",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/c6fa2be65aa87cebe0729402f9b1c95b266642": "9b1ab1b26dfa0c8416ae3ff4753b305c",
".git/objects/23/2f507eaa13d60c533536b50f4c48798b05669d": "8949113d25fdee01896393324258489f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2a/ea597819ac67031b03545e3ac4f29c06056eef": "4cb1f97f7eb221a8ca2aaa170c6463cb",
".git/objects/2b/3eeed1bb92fa505f7807571ef7eb7ed2228820": "320d43d61910417ad1102422e82033ca",
".git/objects/2c/107898637a64a34a0cfc05892bfd0dc3cbd9e6": "149f5ebc2cf0c88dcf5e580518275344",
".git/objects/2c/f169c4f99d340c1dc021b47e88165e37e3f0e5": "88bc209ed3c3f1a8d1314ee923fbe344",
".git/objects/32/b1972c33a99355885fcd67d25430a28084b7df": "24e494710f307b061403981b31189f82",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/564a5068e4da8f459c10222b22ea335e88704c": "72ca70854180118522c037ba1bef7844",
".git/objects/3c/bcc056bd18a66a80eba851fceb465d48c696ce": "b524b3b80065f3402c9999ec213c598f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/3dea4b29f8e2d79f23a5f53e4b52fda6608504": "134aa789b8baae24726a0c60c42d6e62",
".git/objects/41/7c75756c1570378e18f0ba34df4c0141eefd38": "679c8fd8c9e78ca19e79ba94b2dd700b",
".git/objects/47/63cc149fc5a914fb44598cd47a468dd8770be4": "64898aad67819bfb37a9b23a05c36d47",
".git/objects/49/84a739f1d9376d04c0d43a668258d64865eb21": "42bd38fc19fab582ea3a8dac3b503b9a",
".git/objects/4e/cdac51127b2ae1f7edb6a08dc14c9891ffd24c": "7ec81acca7e48a6d82ebb66008fe544a",
".git/objects/4e/f0842d577eb03a963cf1023061e1bfc05d701d": "abe3b8b86fcc3eb2fecaf833ddec3798",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/54/ebd5dbca013607867887151dd973a02ecc72d3": "71d9de4c13511fc860422213eea219e3",
".git/objects/55/f53a21332f1df190d50b71e3477e88cdfdb5cc": "1e6850c3dbf9e4317ef3067c9a4e7831",
".git/objects/56/ea080066c9c0e74b353fe71e48ff7f55d64a61": "a0568f638346ea879b01a3169ad64afe",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/db99ec7bc5f79b32d30667cf575f4e4e5e56ac": "662ac59d1080f53668c9ecfea99d64f1",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/cc4e54b0f22eedfba75e13b7a91d5bc8eb31ea": "2dbb00061e4aa6121834e123dc3c7ddd",
".git/objects/63/d121c0189d5ae13c0b25818cd449d6fa22391a": "2d8534fdf8555c1b2783e6f6e05230e0",
".git/objects/66/13e6a1c639449a0d758460aa7a3bb3a21f5258": "4f707b3b4459d18a4d6e64ee477044df",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e59de13e3cc3e12e83bebe660037443be7fbb7": "2bafd9d88bb8f5a0eb3e2d956ea7a683",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/c7b74cf74c691351baf8a27d58e95335c49d99": "1bf710d65819187c1cd2ae38f8a6e11a",
".git/objects/76/942bf1d4596a33bb474456b82cc8e931bebf6f": "d0b9373bfb5d2a795d58e0159a41c846",
".git/objects/7c/e04692fefe13856e3d17939f83190fee54183b": "4b782c79492d7f375f8176f5377f7291",
".git/objects/85/31010a6757a04627fdf0f95862ae099973a58c": "c8ba4fbbedbbbe92b728f4581868e167",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/aca1eb4e764dcf2574fd02ed51747729ad497b": "419315069ec1697d049c1ee02d4cd3f0",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/90/b1427be4bb45b898af2ea80876fd70944ae198": "a03a4421154a03235e28f646898441a9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/97/a3d192ad80708159a29cadcf6fe7bcd3db4703": "c0f4b2f14d7ef069f6f92c13f13294dd",
".git/objects/98/adf7a907ecc4add276cbd9cea85dbaed8eea16": "9c4e0a73fe623a86b0c13af6cc602fa7",
".git/objects/99/cdfbe54c83f6e3f61b79707561e3fd54f2fa2f": "35d265d38332c676cb1c55c31724fd64",
".git/objects/a0/6eeb619f640ae85e1180542ab80e5a12a60245": "56306411bd310d2d66e99be8faa4505f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/470b921ba1a8d1c6fc67345fd07d01238ea608": "68d0aee56252de047b9eb83d8d352955",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/c9e56f57d157fe673a07aa3dd9ed506ea3a6e7": "f31dece0e3933fa679fd75958afcc0f3",
".git/objects/af/12d8f6548625b6446bf6d1a11e456ebf00f6b6": "b85490428c4aa8507aa5754e6dc7ff7f",
".git/objects/b0/201010b05f9660b3277f1878b6535b1cb1066e": "99b31a47f657274c2916ea94a6a74ab4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7af096ad3bf086ffff7cba2a793947210203a1": "8215cb7aebaf35e0d2e4679ae908c69c",
".git/objects/ba/fd4f2a3c5b5ea0bebdfc2de423abdb0c15e0b5": "cc433517e24913cb9bdf0f83cb6806df",
".git/objects/bb/af72da2d46e9b81684209a3d85780cfb3e1296": "96ab41c0d1a7c9fec20df9965f7e6815",
".git/objects/bf/694e1f0fa79863ab7b2962aea0043dabbb2ca1": "766db8d7df56dd6b03629b6dc223a906",
".git/objects/c2/aa4b5306e6a79e1cca529f92c50d0f1c6a2d3f": "948561055cad3ab8d7fb93cba0107b69",
".git/objects/cf/478b9f78403b796e82d443c8f25a3a86bfd1e3": "eaa8344223d951e761ca248d2eac1e26",
".git/objects/d3/a27a6f54454bf3d53f028d0cc1657a5aec2b81": "b79f1041652d40da940a6d1a9329024f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/afb816e33e8086b30ea7a9e1518c639e8bb557": "d9f8be39c65737ce47915bff8115089f",
".git/objects/d8/0b3d47f8b48fe4a0eafa7f255a6ca51a8c290b": "b6a99e884505515630e08359acdf1376",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/584e71f6cefda1c730cecbbf7ecb4b464e7712": "45594a4e2d71f12e8eea78e53163cf57",
".git/objects/e1/9044587fe5df299152a4b84d8483ae33c6bcdc": "bb9011ea18f489652eddb5c11a16876e",
".git/objects/e1/af29c1248147718228a128176a581507456594": "ce18dd6d5f1f900187d8b0866a00a0a6",
".git/objects/e3/f589b21517918d0581e10633dd987aa326cc4e": "f2b1fe2a2113e62429322a8b8d00bb14",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/7c7bfecd7ddb3456d63c7166fe2e18c5238342": "e0aa7076df5b1a455130d50ca740292d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7ab53d6c372772ff41d91dd19068fc092a2439": "7022deabbb94bb28d605ad7c4b9f9db5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/3830bd88e6721eea440f54ea9592351726161a": "afff923a87c59c63900458dd527193ec",
".git/objects/ff/5ddb98220903e82b5ac36faf22dbba45e25a09": "fb8096200dd0c3f22ff79c554160a728",
".git/refs/heads/gh-pages": "718973d2c9b4c09f01ae4076bbcf3171",
".git/refs/remotes/origin/gh-pages": "718973d2c9b4c09f01ae4076bbcf3171",
"assets/AssetManifest.bin": "e5e37aa5123046e6c3e358cb503087d5",
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
"assets/fonts/MaterialIcons-Regular.otf": "e086fae18dac4d5b58c660d82aeee26f",
"assets/NOTICES": "7aa9c5f410eb2eb6eba995dc826ebb39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "357f52002e23e80f24109d60b4cb3c95",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5c884a01ad6abbd4a01e6af7cad6a6b5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "054fbf959356ec02895c34fb7b67a60f",
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
"flutter_bootstrap.js": "5721cb67ae85271a8bc0328f99b80158",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b180a8d2ff9fac41fdfa6f3766c67e25",
"/": "b180a8d2ff9fac41fdfa6f3766c67e25",
"main.dart.js": "e8f95c5cc3f9ca5713299e85a8d50114",
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
